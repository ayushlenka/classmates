import requests
import re
from bs4 import BeautifulSoup
import json

# URL for Computer Science Courses
BASE_URL = "https://catalog.ucdavis.edu/departments-programs-degrees/computer-science-engineering/#coursestext"

def scrape_courses():

    response = requests.get(BASE_URL)
    response.raise_for_status()  # Will raise an error if the request failed
    soup = BeautifulSoup(response.text, "html.parser")
    course_blocks = soup.select("div.courseblock")  

    # Computer Science Courses
    target_courses = [
    "ECS 020", "ECS 036A", "ECS 036B", "ECS 036C", "ECS 032A", "ECS 032B", "ECS 032C",
    "ECS 034", "ECS 050", "ECS 122A", "ECS 120", "ECS 122B", "ECS 140A", "ECS 150", 
    "ECS 154A", "ECS 132", "ECS 124", "ECS 127", "ECS 129", "ECS 130", "ECS 152A", 
    "ECS 153", "ECS 154B", "ECS 158", "ECS 160", "ECS 161", "ECS 162", "ECS 163", 
    "ECS 164", "ECS 165A", "ECS 170", "ECS 171", "ECS 172", "ECS 173", "ECS 174", 
    "ECS 175", "ECS 177", "ECS 178", "ECS 188", "ECS 189A", "ECS 189B", "ECS 191", 
    "ECS 192", "ECS 193A", "ECS 193B"
    ]

    # List to store course data
    courses_data = []

    for block in course_blocks:

        code_elem = block.select_one("span.detail-code")
        code = code_elem.get_text(strip=True) if code_elem else ""

        if code in target_courses:

            # Extract other fields
            title_elem = block.select_one("span.detail-title")
            title = title_elem.get_text(strip=True) if title_elem else ""

            desc_elem = block.select_one("p.courseblockextra.noindent")
            description = desc_elem.get_text(strip=True) if desc_elem else ""

            prereq_elem = block.select_one("p.detail-prerequisite")
            prerequisites = prereq_elem.get_text(strip=True) if prereq_elem else ""

            # Build a dictionary for this course
            course_info = {
                "code": code,
                "title": title,
                "description": description,
                "prerequisites": prerequisites
            }

            clean_course_data(course_info)
            courses_data.append(course_info)

    return courses_data

# Cleaning course data for proper database insertion
def clean_course_data(course_info):

    # Cleaning course title to be raw title
    title = course_info["title"]
    title = title.lstrip("—– ").strip() 
    course_info["title"] = title

    # Cleaning course description to be raw description
    desc = course_info["description"]
    desc = desc.replace("Course Description:", "")
    desc = re.sub(r"(?i)This version has ended; see updated course, below\.", "", desc)
    desc = desc.strip()
    course_info["description"] = desc

    # Cleaning prerequisites to be a list of lists of course codes
    prereq = course_info["prerequisites"]
    prereq = prereq.replace("Prerequisite(s):", "").strip()
    # Use regex to extract groups inside parentheses
    pattern = r"\((.*?)\)|([A-Z]{2,4}\s*\d{2,3}[A-Z]?)"
    matches = re.findall(pattern, prereq)
    # For each group, split the prerequisites by "or" and clean them
    parsed_prereqs = []
    current_group = []
    for group, standalone in matches:
        if group:
            group_courses = re.findall(r"[A-Z]{2,4}\s*\d{2,3}[A-Z]?", group)
            group_courses = [re.sub(r"\s+", " ", course.strip()) for course in group_courses]
            parsed_prereqs.append(group_courses)
        elif standalone:
            standalone_course = re.sub(r"\s+", " ", standalone.strip())
            current_group.append(standalone_course)
    # Add standalone prerequisites as their own group
    if current_group:
        parsed_prereqs.append(current_group)
    course_info["prerequisites"] = parsed_prereqs
    

    return course_info

if __name__ == "__main__":
    # Actually run the scraper
    courses = scrape_courses()

    # Print how many courses we found
    print(f"Scraped {len(courses)} courses.")

    # 4. Write the results to a JSON file for future use
    with open("courses.json", "w", encoding="utf-8") as f:
        json.dump(courses, f, indent=2, ensure_ascii=False)

    print("Scraping complete. Data saved to courses.json.")
