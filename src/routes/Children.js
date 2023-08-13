import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import childrenCoverPic from "../components/Assets/Children/childrenCoverPic.jpg";
import KarigorChild from "../components/EventChildren/KarigorChild";
function Children() {
  return (
    <>
      <Navbar />
      <Hero
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
