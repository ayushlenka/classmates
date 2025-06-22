import styles from "./transcripts.module.scss";
import Header from "../../components/header/header.jsx";
import Body from "../../components/transcript-body/tbody.jsx";
import Footer from "../../components/footer/footer.jsx";

export default function Transcripts() {
  return (
    <div className={styles.page}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
