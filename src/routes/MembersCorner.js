import HeroOther from "../components/HeroSection/HeroOther";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavbarItems/Navbar";
import Membership from "../components/MembershipItems/Membership";
import MembershipCover from "../components/Assets/Membership/MembershipCover.jpg";

function MembersCorner() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-membership"
        heroImg={MembershipCover}
        titleOther="Member's Corner"
        btnClass="hide"
      />
      <Membership />
      <Footer />
    </>
  );
}

export default MembersCorner;
