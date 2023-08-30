import Navbar from "../components/NavbarItems/Navbar";
import Footer from "../components/Footer/Footer";
import eventCoverPic from "../components/Assets/eventCoverPic.jpg";
import HomeEvent from "../components/HomeEvents/HomeEvent";
import KarigorNews from "../components/EventKpNews/KarigorNews";
import CulturalActivities from "../components/EventCulturalActivities/CulturalActivities";
import HeroOther from "../components/HeroSection/HeroOther";
function Events() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-event"
        heroImg={eventCoverPic}
        titleOther="Karigor Events"
        btnClass="hide"
      />
      <HomeEvent />
      <CulturalActivities />
      <KarigorNews />
      <Footer />
    </>
  );
}

export default Events;
