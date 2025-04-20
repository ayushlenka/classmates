import Inputs from "../../components/inputs/input";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
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
