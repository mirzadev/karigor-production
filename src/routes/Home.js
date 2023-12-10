import Navbar from "../components/NavbarItems/Navbar";
import Overview from "../components/Overview/Overview";
import HomeEvent from "../components/HomeEvents/HomeEvent";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSection/Hero";
import Home_Cover from "../components/Assets/homePage/HomePageCoverPic.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Home_Cover}
        text="Small Bangladesh in Florida - USA"
        title="KARIGOR PRODUCTION AND CULTURAL SOCIETY"
        buttonText="Explore Karigor"
        url="/about"
        btnClass="show"
      />
      <Overview />
      <HomeEvent />
      <Footer />
    </>
  );
}

export default Home;
