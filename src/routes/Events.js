import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import eventCoverPic from "../components/Assets/eventCoverPic.jpg";
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
      <Footer />
    </>
  );
}

export default Events;
