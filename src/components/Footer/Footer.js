import "./FooterStyles.css";
import karigorLogo from "../Assets/karigor-logo.PNG";
import FaceBook from "../Assets/footerItem/Facebook.png";
import Twiter from "../Assets/footerItem/Twiter.png";
import YouTube from "../Assets/footerItem/YouTube.png";
import Location from "../Assets/footerItem/Location_Symbol.png";
import Telephone from "../Assets/footerItem/Telephone_Logo.png";
import Email from "../Assets/footerItem/Email_Logo.png";
import DemandDistr from "../Assets/footerItem/DD-Logo1.png";
import MiamiKDistr from "../Assets/footerItem/miami-k-distributions.png";
import NepaWholesale from "../Assets/footerItem/nepa-wholesale.png";
import ManhaMunibaWholesale from "../Assets/footerItem/Manha_Muniba_Wholesale_Logo.png";
import pspTechLogo from "../Assets/footerItem/pspTech-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div id="footer-header">
          <div className="footer-title">
            <a data-testid="link" href="/">
              <img
                id="karigor-logo"
                src={karigorLogo}
                alt="logo"
                height="73"
                width="110"
              ></img>
            </a>
            <a class="footer-link" href="/">
              <span id="footer-app-title">KARIGOR PRODUCTION</span>
            </a>
          </div>
          <p>A small Bangladesh in Florida, USA</p>
        </div>
        <div className="upcomingEvents">
          <Link to="/upcoming" className="upcoming-link">
            <h1>Karigor Upcoming Events</h1>
          </Link>
        </div>
      </div>

      <div className="bottom">
        <div className="social-media-div">
          <h4>Social Media</h4>
          <div className="social-media">
            <Link
              to="https://www.facebook.com/kptv24"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FaceBook} alt="facebook" height="40" width="40" />
            </Link>
            <Link to="/" target="_blank" rel="noreferrer">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="40"
                width="40"
              />
            </Link>
            <Link
              to="https://www.youtube.com/@karigor_production"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YouTube} alt="youtube" height="40" width="50" />
            </Link>
          </div>
        </div>
        <div className="useful-links">
          <h4>Useful Links</h4>
          <div className="link-menues">
            <div className="link-menu-1">
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/events">Events</Link>
              <Link to="/children">Children</Link>
              <Link to="/members">Members</Link>
            </div>
            <div className="link-menu-2">
              <Link to="/boishakh">Pohela Boishakh</Link>
              <Link to="/ekCupCha">Ek Cup Cha</Link>
              <Link to="/kpCulture">Cultural Events</Link>
              <Link to="/kpNews">Karigor News</Link>
              <Link to="/upcoming">Upcoming Events</Link>
            </div>
          </div>
        </div>
        <div className="footer-contact-us">
          <h4>Contact Us</h4>
          <div className="location-address">
            <Link
              to="https://www.google.com/maps/@26.6229841,-80.1158108,3a,75y,274.5h,90t/data=!3m6!1e1!3m4!1sdGWJyKVny4bUXrWa2BcDRw!2e0!7i16384!8i8192?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Location} alt="location" height="50" width="50" />
            </Link>
            <Link
              to="https://www.google.com/maps/@26.6229841,-80.1158108,3a,75y,274.5h,90t/data=!3m6!1e1!3m4!1sdGWJyKVny4bUXrWa2BcDRw!2e0!7i16384!8i8192?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p className="location-address">3726 Nyack Lane</p>
                <p className="location-address">Lake Worth, FL-33463</p>
              </div>
            </Link>
          </div>
          <div className="telephone">
            <a href="/">
              <img src={Telephone} alt="telephone" height="35" width="35" />
            </a>
            <a>
              <p className="telephone-number">1(561) 779 4154 (Cell)</p>
            </a>
          </div>
          <div className="email">
            <Link
              to="https://mail.google.com/mail/u/2/#inbox"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Email} alt="email" height="40" width="40" />
            </Link>
            <Link
              to="https://mail.google.com/mail/u/2/#inbox"
              target="_blank"
              rel="noreferrer"
            >
              <p className="email-address">kptv24@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="karigor-sponsors">
          <h4>Our Proud Sponsors</h4>
          <div className="sponsors-items">
            <Link
              to="https://demanddistribution.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={DemandDistr} alt="demand" height="32" width="35" />
            </Link>
            <Link
              to="https://demanddistribution.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Demand Distributions</p>
            </Link>
          </div>
          <div className="sponsors-items">
            <Link
              to="https://miamikdistribution.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={MiamiKDistr} alt="miamiK" height="35" width="130" />
            </Link>
            <Link
              to="https://miamikdistribution.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Miami K Distributions</p>
            </Link>
          </div>
          <div className="sponsors-items">
            <Link
              to="https://nepa2wholesale.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={NepaWholesale} alt="email" height="35" width="130" />
            </Link>
            <Link
              to="https://nepa2wholesale.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>NEPA Wholesale</p>
            </Link>
          </div>
          <div className="sponsors-items">
            <Link to="#" target="_blank" rel="noreferrer">
              <img
                src={ManhaMunibaWholesale}
                alt="email"
                height="45"
                width="50"
              />
            </Link>
            <Link to="#" target="_blank" rel="noreferrer">
              <p className="mm-wholesale">Manha Muniba Wholesale</p>
            </Link>
          </div>
        </div>
      </div>
      <hr />

      <div className="copyright-note">
        <p>Copyright @</p>
        <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
          <img src={pspTechLogo} alt="psptech" height="35" width="35" />
        </Link>
        <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
          <p>PSP Technology Inc</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
