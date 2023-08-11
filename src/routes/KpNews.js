import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import boishakhCoverPic from "../components/Assets/contactCoverPic.jpg";
import KarigorNews from "../components/EventKpNews/KarigorNews";

function KpCulture() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-news"
        heroImg={boishakhCoverPic}
        titleOther="Karigor News"
        btnClass="hide"
      />
      <KarigorNews />
      <Footer />
    </>
  );
}

export default KpCulture;
