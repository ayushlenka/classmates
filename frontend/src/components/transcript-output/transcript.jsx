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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M12.9015 7.71816C13.7487 5.239 17.1742 5.16391 18.1786 7.49291L18.2636 7.71958L19.4068 11.0629C19.6688 11.8297 20.0922 12.5313 20.6484 13.1205C21.2046 13.7097 21.8808 14.1728 22.6312 14.4785L22.9386 14.5932L26.2819 15.7351C28.7611 16.5822 28.8362 20.0077 26.5086 21.0122L26.2819 21.0972L22.9386 22.2404C22.1716 22.5022 21.4696 22.9256 20.8802 23.4818C20.2907 24.038 19.8274 24.7142 19.5216 25.4647L19.4068 25.7707L18.265 29.1155C17.4178 31.5947 13.9923 31.6697 12.9893 29.3422L12.9015 29.1155L11.7597 25.7722C11.4978 25.0052 11.0745 24.3032 10.5183 23.7138C9.96206 23.1243 9.28586 22.661 8.53532 22.3552L8.22932 22.2404L4.88599 21.0986C2.4054 20.2514 2.33032 16.8259 4.65932 15.8229L4.88599 15.7351L8.22932 14.5932C8.99607 14.3312 9.69771 13.9079 10.2869 13.3516C10.8761 12.7954 11.3392 12.1193 11.6449 11.3689L11.7597 11.0629L12.9015 7.71816ZM15.5832 8.63333L14.4414 11.9767C14.0425 13.1458 13.3935 14.214 12.5396 15.1068C11.6857 15.9996 10.6475 16.6955 9.49724 17.1461L9.14307 17.275L5.79974 18.4168L9.14307 19.5587C10.3123 19.9576 11.3804 20.6066 12.2732 21.4605C13.166 22.3144 13.8619 23.3526 14.3125 24.5028L14.4414 24.857L15.5832 28.2003L16.7251 24.857C17.124 23.6878 17.773 22.6196 18.6269 21.7269C19.4808 20.8341 20.519 20.1382 21.6692 19.6876L22.0234 19.5601L25.3667 18.4168L22.0234 17.275C20.8542 16.876 19.7861 16.227 18.8933 15.3732C18.0005 14.5193 17.3046 13.4811 16.854 12.3308L16.7265 11.9767L15.5832 8.63333ZM26.9166 2.8335C27.1816 2.8335 27.4413 2.90784 27.6662 3.04808C27.8911 3.18832 28.0721 3.38883 28.1887 3.62683L28.2567 3.79258L28.7526 5.24608L30.2075 5.74191C30.4731 5.83215 30.7059 5.9992 30.8765 6.2219C31.047 6.4446 31.1476 6.71292 31.1655 6.99286C31.1835 7.2728 31.1178 7.55175 30.977 7.79436C30.8363 8.03697 30.6266 8.23233 30.3747 8.35566L30.2075 8.42366L28.754 8.9195L28.2582 10.3744C28.1678 10.6399 28.0006 10.8727 27.7778 11.0431C27.555 11.2135 27.2867 11.3139 27.0067 11.3317C26.7268 11.3494 26.4479 11.2837 26.2054 11.1428C25.9629 11.0019 25.7676 10.7921 25.6444 10.5402L25.5764 10.3744L25.0806 8.92091L23.6257 8.42508C23.3601 8.33484 23.1272 8.16779 22.9567 7.94509C22.7861 7.72239 22.6855 7.45407 22.6676 7.17413C22.6497 6.8942 22.7153 6.61524 22.8561 6.37263C22.9969 6.13002 23.2065 5.93467 23.4585 5.81133L23.6257 5.74333L25.0792 5.2475L25.575 3.79258C25.6705 3.51268 25.8512 3.2697 26.0918 3.0977C26.3324 2.92571 26.6208 2.83332 26.9166 2.8335Z"
              fill="url(#paint0_linear_83_702)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_83_702"
                x1="17.0679"
                y1="2.8335"
                x2="17.0679"
                y2="31.0331"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4FE2E2" />
                <stop offset="0.495" stop-color="#EFFF8F" />
                <stop offset="1" stop-color="#BC55EC" />
              </linearGradient>
            </defs>
          </svg>

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
