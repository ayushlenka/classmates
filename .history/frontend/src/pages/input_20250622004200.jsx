import Generator from "../components/generator";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Input() {
  return (
    <div className="bg-[#101010] min-h-screen">
      <Header />
      <Generator />
      <Footer />
    </div>
  );
}
