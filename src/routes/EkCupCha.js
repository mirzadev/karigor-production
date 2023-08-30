import Navbar from "../components/NavbarItems/Navbar";
import Footer from "../components/Footer/Footer";
import ekCupChaCover from "../components/Assets/ekCupCha/ekCupChaCover.jpg";
import EventEkCupCha from "../components/EventEkCupCha/EventEkCupCha";
import HeroOther from "../components/HeroSection/HeroOther";

function EkCupCha() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-boishakh"
        heroImg={ekCupChaCover}
        titleOther="Ek Cup Cha"
        btnClass="hide"
      />
      <EventEkCupCha />
      <Footer />
    </>
  );
}

export default EkCupCha;
