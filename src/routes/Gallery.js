import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import galleryCoverPic from "../components/Assets/galleryCoverPic.jpg";
function Gallery() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-gallery"
        heroImg={galleryCoverPic}
        titleOther="Gallery"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Gallery;
