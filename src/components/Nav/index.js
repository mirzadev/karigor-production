import React, { useState } from "react";
import karigorLogo from "./images/karigor-logo.PNG";
import { capitalizeFirstLetter } from "../../utils/helper";

function Nav() {
  const [categories] = useState([
    {
      name: "Cultural",
      description:
        "Cultural activities of Karigor in various years. Major event for Karigor is annual Bengali New year celebration.",
    },
    {
      name: "Children Section",
      description:
        "Today's childrens are our future, who will uphold the Bengali culture in future in USA",
    },
    {
      name: "Social Activities",
      description:
        "Besides organizing annual cultural activities and events, Karigor is comitted to assist organizing social activities of other Bangladeshi organizarions in USA.",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span>
            <img
              id="karigor-logo"
              src={karigorLogo}
              alt=""
              height="70"
              width="110"
            ></img>
          </span>
        </a>
      </h2>
      <a className="title-header">
        <span>KARIGOR PRODUCTION</span>
      </a>
      <nav className="right-aligned">
        <ul className="flex-row" id="nav-items">
          <li className="mx-2">
            <a href="#home">Home</a>
          </li>
          <li className="mx-2">
            <a href="#about">About Us</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="mx-2">
            <a href="#events">Events</a>
          </li>
          <li className="mx-2">
            <a href="#gallery">Gallery</a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
