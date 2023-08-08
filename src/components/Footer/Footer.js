import "./FooterStyles.css";
import karigorLogo from "../Assets/karigor-logo.PNG";
import FaceBook from "../Assets/footerItem/Facebook.png";
import Twiter from "../Assets/footerItem/Twiter.png";
import YouTube from "../Assets/footerItem/YouTube.png";
import Location from "../Assets/footerItem/Location_Symbol.png";
import Telephone from "../Assets/footerItem/Telephone_Logo.png";
import Email from "../Assets/footerItem/Email_Logo.png";

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
      </div>

      <div className="bottom">
        <div>
          <h4>Social Media</h4>
          <div className="social-media">
            <a href="https://www.facebook.com/kptv24">
              <img src={FaceBook} alt="facebook" height="40" width="40" />
            </a>
            <a href="/">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="40"
                width="40"
              />
            </a>
            <a href="https://www.youtube.com/@karigor_production">
              <img src={YouTube} alt="youtube" height="40" width="50" />
            </a>
          </div>
        </div>
        <div className="useful-links">
          <h4>Useful Links</h4>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/events">Events</a>
          <a href="/gallery">Gallery</a>
        </div>
        <div className="footer-contact-us">
          <h4>Contact Us</h4>
          <div className="location-address">
            <a href="/">
              <img src={Location} alt="location" height="50" width="50" />
            </a>
            <a href="/">
              <div>
                <p>3726 Nyack Lane</p>
                <p>Lake Worth, FL-33463</p>
              </div>
            </a>
          </div>
          <div className="telephone">
            <a href="/">
              <img src={Telephone} alt="telephone" height="35" width="35" />
            </a>
            <a>
              <p>1(561) 779 4154 (Cell)</p>
            </a>
          </div>
          <div className="email">
            <a href="/">
              <img src={Email} alt="email" height="40" width="40" />
            </a>
            <a href="/">
              <p>kptv24@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p className="copyright-note">
          Copyright @<a href="https://psptech.net/">PSP Technology Inc</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
