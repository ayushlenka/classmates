import styles from "./input.module.scss";

export default function Input() {
  return (
    <div className={styles.inputContainer}>
      <h1>Schedule Generator</h1>

      <div className={styles.inputContent}>
        <p>Upload Unofficial Transcript</p>

        <div className={styles.link}></div>

        <div className={styles.inputSelection}>
          <div className={styles.graduation}>
            <p>Expected Graduation Date</p>
            <p className={styles.selectDate}>Select a date</p>
          </div>

          <div className={styles.major}>
            <p>Major</p>
            <p className={styles.selectMajor}>Select a major</p>
          </div>
        </div>

        <a href="/results">Create Schedule</a>
      </div>
    </div>
  );
}
