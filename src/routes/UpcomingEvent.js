import HeroOther from "../components/HeroSection/HeroOther";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavbarItems/Navbar";
import EventUpcoming from "../components/Upcoming/EventsUpcoming";
import UpcomingCoverPic from "../components/Assets/upcomingEvent/UpcomingCoverPic.jpg";

function Upcoming() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-upcoming"
        heroImg={UpcomingCoverPic}
        titleOther="Upcoming Events"
        btnClass="hide"
      />
      <EventUpcoming />
      <Footer />
    </>
  );
}

export default Upcoming;
