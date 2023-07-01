import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function Home() {
  return (
    <section className="my-5">
      <h1 id="home-title">KARIGOR PRODUCTION AND CULTURAL SOCIETY</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus
          ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam
          maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean
          sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi
          tristique justo vel turpis sollicitudin, et tristique velit convallis.
          In hac habitasse platea dictumst. Phasellus mattis nunc sed orci
          consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet
          ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>

    /*    
    <section className="my-5">
      <div className="container">
        <div className="row">
          <h1 id="mission">KARIGOR PRODUCTION AND CULTURAL SOCIETY</h1>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <p>
              To uphold the cultural heritage of Bangladesh in USA and inject
              the same in future generation
            </p>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <img
              src={coverImage}
              className="my-2"
              style={{ width: "100%" }}
              alt="cover"
            ></img>
          </div>
        </div>
      </div>
    </section>
*/
  );
}

export default Home;
