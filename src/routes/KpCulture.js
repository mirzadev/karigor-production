import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavbarItems/Navbar";
import boishakhCoverPic from "../components/Assets/contactCoverPic.jpg";
import CulturalActivities from "../components/EventCulturalActivities/CulturalActivities";
import HeroOther from "../components/HeroSection/HeroOther";

function KpCulture() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-culture"
        heroImg={boishakhCoverPic}
        titleOther="Cultural Activities"
        btnClass="hide"
      />
      <CulturalActivities />
      <Footer />
    </>
  );
}

export default KpCulture;
