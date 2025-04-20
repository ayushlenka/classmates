import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.circleWrapper}>
        <div className={`${styles.circle} ${styles.purple}`}></div>
        <div className={`${styles.circle} ${styles.yellow}`}></div>
        <div className={`${styles.circle} ${styles.blue}`}></div>
      </div>

      <header className={styles.header}>
        <a href="#" className={styles.logo}></a>

        <section className={styles.buttons}>
          <a href="#" className={styles.recommender}>
            Recommender
          </a>

          <a href="#" className={styles.transcripts}>
            Your Transcripts
          </a>
        </section>

        <a href="#" className={styles.logOut}>
          Log out
        </a>
      </header>
    </div>
  );
}
