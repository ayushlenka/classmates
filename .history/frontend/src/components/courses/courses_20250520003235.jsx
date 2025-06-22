import styles from "./courses.module.scss";
import CourseQuarter from "../course-quarter/courseq.jsx";

const data = [
  {
    quarter: "Fall",
    c1: "Course 1 Name",
    u1: "1",
    c2: "Course 2 Name",
    u2: "2",
    c3: "Course 3 Name",
    u3: "3",
    c4: "Course 4 Name",
    u4: "4",
    c5: "Course 5 Name",
    u5: "5",
    c6: "Course 6 Name",
    u6: "6",
    c7: "Course 7 Name",
    u7: "7",
    c8: "Course 8 Name",
    u8: "8",
    ct: "8",
    ut: "36",
  },
  {
    quarter: "Winter",
    c1: "Course 1 Name",
    u1: "8",
    c2: "Course 2 Name",
    u2: "7",
    c3: "Course 3 Name",
    u3: "6",
    c4: "Course 4 Name",
    u4: "5",
    c5: "Course 5 Name",
    u5: "4",
    c6: "Course 6 Name",
    u6: "3",
    c7: "Course 7 Name",
    u7: "2",
    c8: "Course 8 Name",
    u8: "1",
    ct: "8",
    ut: "36",
  },
  {
    quarter: "Spring",
    c1: "Course 1 Name",
    u1: "8",
    c2: "Course 2 Name",
    u2: "7",
    c3: "Course 3 Name",
    u3: "6",
    c4: "Course 4 Name",
    u4: "5",
    c5: "Course 5 Name",
    u5: "4",
    c6: "Course 6 Name",
    u6: "3",
    c7: "Course 7 Name",
    u7: "2",
    c8: "Course 8 Name",
    u8: "1",
    ct: "8",
    ut: "36",
  },
];

export default function Courses({ year }) {
  return (
    <div className={styles.coursesContainer}>
      <div className={styles.courseYear}>
        <h4>Academic Year {year}</h4>
      </div>

      <div className={styles.courseList}>
        {data.map((item, index) => (
          <CourseQuarter
            key={index}
            year={item.year}
            quarter={item.quarter}
            c1={item.c1}
            u1={item.u1}
            c2={item.c2}
            u2={item.u2}
            c3={item.c3}
            u3={item.u3}
            c4={item.c4}
            u4={item.u4}
            c5={item.c5}
            u5={item.u5}
            c6={item.c6}
            u6={item.u6}
            c7={item.c7}
            u7={item.u7}
            c8={item.c8}
            u8={item.u8}
            ct={item.ct}
            ut={item.ut}
          />
        ))}
      </div>
    </div>
  );
}
