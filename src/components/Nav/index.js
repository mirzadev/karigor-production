import React from "react";
import karigorLogo from "./images/karigor-logo.PNG";
import { capitalizeFirstLetter } from "../../utils/helper";

function Nav() {
  const categories = [
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
    { name: "Education", description: "Delicious delicacies" },
    {
      name: "Social Activities",
      description:
        "Besides organizing annual cultural activities and events, Karigor is comitted to assist organizing social activities of other Bangladeshi organizarions in USA.",
    },
  ];

  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a className="navbar-brand" id="brandName" href="/">
          <span>
            <img
              id="karigor-logo"
              src={karigorLogo}
              alt=""
              height="70"
              width="110"
            ></img>
          </span>{" "}
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
            <a href="#about">About</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="mx-2">
            <a href="#events">Events</a>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick();
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

/*
function Nav() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of Pohela Boishakh, cultural events, social activities",
    },
    {
      name: "children",
      description:
        "Childrens of Karigor regularly gets training on Bangali culture and regularly takes part in social activities",
    },
    {
      name: "religion",
      description: "Karigor upholds the religious and ethnic values for all",
    },
    {
      name: "mix-pictures",
      description: "Pictures of various events",
    },
  ];
  function categorySelected(name) {
    console.log(`${name} clicked`);
  }
  return (
    <header>
      <h2>
        <a className="navbar-brand" id="brandName" href="/">
          <span>
            <img
              id="karigor-logo"
              src={karigorLogo}
              alt=""
              height="60"
              width="100"
            ></img>
          </span>{" "}
          KARIGOR
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#home">Home</a>
          </li>
          <li className="mx-2">
            <a href="#about">About</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="mx-2">
            <a href="#events">Events</a>
          </li>
          {categories.map((category) => {
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>;
          })}
        </ul>
      </nav>
    </header>
  );
}
*/

export default Nav;
