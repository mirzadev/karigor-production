import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview/Overview";
import HomeEvent from "../components/HomeEvents/HomeEvent";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1375792443/photo/drone-view-of-coxs-bazaar-sea-beach-chattogram-bangladesh.webp?b=1&s=170667a&w=0&k=20&c=vjLROOT71dq8VpX12jDebFaiPffZwFskj6eSammFOsg="
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
