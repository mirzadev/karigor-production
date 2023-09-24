import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavbarItems/Navbar";
import boishakhCoverPic from "../components/Assets/kpNews/kpNewsCoverPic.jpg";
import KarigorNews from "../components/EventKpNews/KarigorNews";
import HeroOther from "../components/HeroSection/HeroOther";

function KpNews() {
  return (
    <>
      <Navbar />
      <HeroOther
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

export default KpNews;
