import styles from "./results.module.scss";
import Header from "../../components/header/header.jsx";
import Transcript from "../../components/transcript-output/transcript.jsx";
import Footer from "../../components/footer/footer.jsx";

export default function Results() {
  return (
    <div className={styles.page}>
      <Header />
      <Transcript />
      <Footer />
    </div>
  );
}
