import HeroOther from "../components/HeroSection/HeroOther";
import Navbar from "../components/NavbarItems/Navbar";
import Footer from "../components/Footer/Footer";
import childrenCoverPic from "../components/Assets/Children/childrenCoverPic.jpg";
import KarigorChild from "../components/EventChildren/KarigorChild";
function Children() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-children"
        heroImg={childrenCoverPic}
        titleOther="Children"
        btnClass="hide"
      />
      <KarigorChild />
      <Footer />
    </>
  );
}

export default Children;
