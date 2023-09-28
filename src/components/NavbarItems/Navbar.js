import React, { useState } from "react";
import karigorLogo from "../Assets/karigor-logo.PNG";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Dropdown from "../Drop-Down-Menu/EventDropDown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <nav className="NavbarItems">
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
        <a class="header-link" href="/">
          <span id="app-title">KARIGOR PRODUCTION</span>
        </a>

        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (item.title === "Events") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link id="event-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="event-drop-menu"></i>
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
          <Link to="/members">
            <button className="membership" href="/members">
              Members
            </button>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
