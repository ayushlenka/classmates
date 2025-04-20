import styles from "./tbody.module.scss";
import Card from "../card/card.jsx";

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
        <h1>Your Generated Schedules</h1>

        <div className={styles.description}>
          <img src="sparkle.svg" alt="" />
          <p>Here are the schedules you generated in the past.</p>
        </div>
      </section>

      <section className={styles.content}>
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
    </div>
  );
}
