import React from "react";
import { capitalizeFirstLetter } from "../../utils/helper";
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
  const currentCategory = {
    name: "cultural",
    description:
      "Cultural activities of Karigor in various years. Major event for Karigor is annual Bengali New year celebration.",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Cultural Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default Gallery;
