import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import galleryCoverPic from "../components/assets/galleryCoverPic.jpg";
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
    </>
  );
}

export default Gallery;
