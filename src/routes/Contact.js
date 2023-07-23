import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import contactCoverPic from "../components/Assets/contactCoverPic.jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-contact"
        heroImg={contactCoverPic}
        titleOther="Contact Us"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Contact;
