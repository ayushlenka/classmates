import styles from "./transcripts.module.scss";
import Header from "../../components/header.jsx";
import TranscriptLayout from "../../components/tbody.jsx";
import Footer from "../../components/footer.jsx";

export default function Transcripts() {
  return (
    <div className={styles.page}>
      <Header />
      <TranscriptLayout />
      <Footer />
    </div>
  );
}
