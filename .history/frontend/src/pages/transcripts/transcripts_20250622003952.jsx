import Header from "../../components/header.jsx";
import TranscriptLayout from "../../components/tbody.jsx";
import Footer from "../../components/footer.jsx";

export default function Transcripts() {
  return (
    <div className="bg-[#101010] min-h-screen">
      <Header />
      <TranscriptLayout />
      <Footer />
    </div>
  );
}
