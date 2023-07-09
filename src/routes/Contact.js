import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactCoverPic from "../components/assets/contactCoverPic.jpg";
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
    </>
  );
}

export default Contact;
