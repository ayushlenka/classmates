import styles from "./courseq.module.scss";

export default function Courses({
  year,
  quarter,
  c1,
  u1,
  c2,
  u2,
  c3,
  u3,
  c4,
  u4,
  c5,
  u5,
  c6,
  u6,
  c7,
  u7,
  c8,
  u8,
  ct,
  ut,
}) {
  return (
    <div className={styles.coursesContainer}>
      <div className={styles.courses}>
        <div className={styles.courseQuarter}>
          <span className={styles.quarter}>{quarter} Quarter</span>

          <div className={styles.courseItem}>
            <div className={styles.courseName}>{c1}</div>

            <div className={styles.courseUnit}>{u1}</div>
          </div>

          <div className={styles.courseItem}>
            <div className={styles.courseName}>{c2}</div>

            <div className={styles.courseUnit}>{u2}</div>
          </div>

          <div className={styles.courseItem}>
            <div className={styles.courseName}>{c3}</div>

            <div className={styles.courseUnit}>{u3}</div>
          </div>

          <div className={styles.courseItem}>
            <div className={styles.courseName}>{c4}</div>

            <div className={styles.courseUnit}>{u4}</div>
          </div>

          <div className={styles.courseItem}>
            <div className={styles.courseName}>{c5}</div>

            <div className={styles.courseUnit}>{u5}</div>
          </div>

          <div className={styles.courseItem}>
            <div className={styles.courseName}>{c6}</div>

            <div className={styles.courseUnit}>{u6}</div>
          </div>

          <div className={styles.courseItem}>
            <div className={styles.courseName}>{c7}</div>

            <div className={styles.courseUnit}>{u7}</div>
          </div>

          <div className={styles.courseItem}>
            <div className={styles.courseName}>{c8}</div>

            <div className={styles.courseUnit}>{u8}</div>
          </div>

          <div className={styles.total}>
            <div className={styles.courseTotal}>
              <p>
                Total: {ct} {"course(s)"}
              </p>
            </div>

            <div className={styles.unitTotal}> {ut} units</div>
          </div>
        </div>
      </div>
    </div>
  );
}
