import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import eventCoverPic from "../components/assets/eventCoverPic.jpg";
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
    </>
  );
}

export default Events;
