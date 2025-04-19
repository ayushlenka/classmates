import json
import openai
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path="../../.env")


openai.api_key = os.getenv("OPENAI_API_KEY")

# Load courses.json
with open("courses.json", "r") as file:
    courses = json.load(file)

for course in courses:
    prompt = f"""
    Given the following course information, categorize the course:
    - Type (required or elective): Based on whether it is essential for a major or optional.
    - Focus: The primary focus area(s) of the course (e.g., software engineering, artificial intelligence, bioinformatics).

    Course:
    - Code: {course['code']}
    - Title: {course['title']}
    - Description: {course['description']}
    - Prerequisites: {', '.join([', '.join(group) for group in course['prerequisites']])}

    Output:
    - Type:
    - Focus:
    """
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=100
    )

    # Parse the response
    result = response.choices[0].text.strip().split("\n")
    course["type"] = result[0].split(":")[1].strip()
    course["focus"] = result[1].split(":")[1].strip().strip("[]").split(", ")

# Save the updated courses.json
with open("updated_courses.json", "w") as file:
    json.dump(courses, file, indent=2)

print("Updated courses saved to updated_courses.json.")