import styles from "./card.module.scss";

export default function Card({ title, year, date, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.year}>{year}</p>
      </div>

      <div className={styles.date}>
        Generated on:<span>{date}</span>
      </div>

      <a
        href="/result"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkButton}
      >
        View transcript →
      </a>
    </div>
  );
}
