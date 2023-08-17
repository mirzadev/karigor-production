import { Component } from "react";
import karigorLogo from "./Assets/karigor-logo.PNG";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import backgroundVdo from "./Assets/homeEventImage/home_background.mp4";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
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

          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.CName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <button className="signup">Sign Up</button>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
