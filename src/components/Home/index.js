import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function Home() {
  return (
    <section className="my-5">
      <div class="container">
        <div class="row">
          <h1 id="mission">KARIGOR PRODUCTION AND CULTURAL SOCIETY</h1>
          <div class="col-sm-12 col-md-8 col-lg-8">
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
  );
}

export default Home;
