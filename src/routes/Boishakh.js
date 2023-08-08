import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import PohelaBoishakh from "../components/EventBoishakh/PohelaBoishakh";
import boishakhCoverPic from "../components/Assets/contactCoverPic.jpg";

function Boishakh() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-boishakh"
        heroImg={boishakhCoverPic}
        titleOther="Pohela Boishakh"
        btnClass="hide"
      />
      <PohelaBoishakh />
      <Footer />
    </>
  );
}

export default Boishakh;
