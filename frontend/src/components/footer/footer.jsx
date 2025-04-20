import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>© 2025 Classmates. All rights reserved.</p>
        <p>
          Classmates is not endorsed by the University of California, Davis.
        </p>
      </div>
    </footer>
  );
}
