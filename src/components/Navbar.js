import { Component } from "react";
import karigorLogo from "./Assets/karigor-logo.PNG";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
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
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.CName} href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button className="signup">Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
