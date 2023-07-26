import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import aboutCoverPic from "../components/Assets/aboutCoverPic.jpg";
import Overview from "../components/Overview/Overview";
import AboutUs from "../components/AboutUs/AboutUs";
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
      <Overview />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
