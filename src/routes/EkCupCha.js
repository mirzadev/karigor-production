import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import ekCupChaCover from "../components/Assets/ekCupCha/ekCupChaCover.jpg";
import EventEkCupCha from "../components/EventEkCupCha/EventEkCupCha";

function EkCupCha() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-boishakh"
        heroImg={ekCupChaCover}
        // titleOther="Ek Cup Cha"
        btnClass="hide"
      />
      <EventEkCupCha />
      <Footer />
    </>
  );
}

export default EkCupCha;
