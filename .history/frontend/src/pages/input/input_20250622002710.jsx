import Input from "../../components/input";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./input.module.scss";

export default function Input() {
  return (
    <div className={styles.page}>
      <Header />
      <Inputs />
      <Footer />
    </div>
  );
}
