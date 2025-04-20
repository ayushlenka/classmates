import styles from "./tbody.module.scss";
import Card from "./card/card.jsx";

const data = [
  {
    title: "Computer Science Transcript",
    year: "Spring 2026",
    date: "2025-01-23",
    link: "https://example.com/beta",
  },
  {
    title: "Computer Science Transcript",
    year: "Spring 2026",
    date: "2025-01-23",
    link: "https://example.com/beta",
  },
  {
    title: "Computer Science Transcript",
    year: "Spring 2026",
    date: "2025-01-23",
    link: "https://example.com/beta",
  },
];

export default function Body() {
  return (
    <div className={styles.main}>
      <section className={styles.title}>
        <h1>Your Transcripts</h1>
      </section>

      <section className={styles.content}>
        <p>View your previously generated transcripts.</p>

        <section>
          <div className={styles.cardList}>
            {data.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                year={item.year}
                date={item.date}
                link={item.link}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
