import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import boishakhCoverPic from "../components/Assets/contactCoverPic.jpg";
import CulturalActivities from "../components/EventCulturalActivities/CulturalActivities";

function KpCulture() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-culture"
        heroImg={boishakhCoverPic}
        titleOther="Karigor Cultural Activities"
        btnClass="hide"
      />
      <CulturalActivities />
      <Footer />
    </>
  );
}

export default KpCulture;
