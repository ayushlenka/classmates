import styles from "./transcript.module.scss";
import Courses from "../courses/courses.jsx";

const data = [
  {
    year: "1",
  },
  { year: "2" },
];

export default function Transcript() {
  return (
    <div className={styles.transcriptContainer}>
      <div className={styles.transcriptTitle}>
        <h1>Your Recommended Schedule</h1>

        <div className={styles.transcriptDescription}>
          <img src="sparkle.svg" alt="sparkle svg" />

          <p>
            Based on your transcripts and chosen major, <span>Design</span>, we
            recommend focusing on courses that align with your career goal as a{" "}
            <span>UX Designer</span>. Consider exploring advanced courses and
            internship opportunities in your field to gain practical experience.
          </p>
        </div>
      </div>

      <div className={styles.transcriptContent}>
        <div className={styles.transcriptContentTitle}>
          <h2>Completed Courses</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="517"
            height="2"
            viewBox="0 0 517 2"
            fill="none"
          >
            <path
              d="M1 1H516"
              stroke="url(#paint0_linear_70_620)"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70_620"
                x1="1"
                y1="1.5"
                x2="516"
                y2="1.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E2E2E2" stop-opacity="0" />
                <stop offset="0.065" stop-color="#B9B9B9" />
                <stop offset="0.58" stop-color="#B9B9B9" />
                <stop offset="1" stop-color="#E2E2E2" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={styles.courseList}>
          {data.map((item, index) => (
            <Courses key={index} year={item.year} />
          ))}
        </div>

        <div className={styles.recommendedTranscript}>
          <h2>Recommended Courses</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="517"
            height="2"
            viewBox="0 0 517 2"
            fill="none"
          >
            <path
              d="M1 1H516"
              stroke="url(#paint0_linear_70_620)"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70_620"
                x1="1"
                y1="1.5"
                x2="516"
                y2="1.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E2E2E2" stop-opacity="0" />
                <stop offset="0.065" stop-color="#B9B9B9" />
                <stop offset="0.58" stop-color="#B9B9B9" />
                <stop offset="1" stop-color="#E2E2E2" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={styles.courseList}>
          {data.map((item, index) => (
            <Courses key={index} year={item.year} />
          ))}
        </div>

        <div className={styles.save}>
          <p>Schedule Name</p>
          <div className={styles.btns}>
            <p>Computer Science Schedule 1</p>
            <a href="#" className={styles.saveBtn}>
              Save Schedule
            </a>
            <a href="#" className={styles.downloadBtn}>
              Download as PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
