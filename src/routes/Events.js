import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import eventCoverPic from "../components/Assets/eventCoverPic.jpg";
import HomeEvent from "../components/HomeEvents/HomeEvent";
import PohelaBoishakh from "../components/EventBoishakh/PohelaBoishakh";
function Events() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-event"
        heroImg={eventCoverPic}
        titleOther="Karigor Events"
        btnClass="hide"
      />
      <HomeEvent />
      <PohelaBoishakh />
      <Footer />
    </>
  );
}

export default Events;
