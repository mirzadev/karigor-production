import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import aboutCoverPic from "../components/Assets/aboutCoverPic.jpg";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={aboutCoverPic}
        titleOther="About Karigor"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default About;
