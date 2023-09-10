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
import pspTechLogo from "../Assets/footerItem/pspTech-logo.png";

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
          <a>
            <h1>Karigor Upcoming Events</h1>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div className="social-media-div">
          <h4>Social Media</h4>
          <div className="social-media">
            <a href="https://www.facebook.com/kptv24" target="_blank">
              <img src={FaceBook} alt="facebook" height="40" width="40" />
            </a>
            <a href="/" target="_blank">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="40"
                width="40"
              />
            </a>
            <a
              href="https://www.youtube.com/@karigor_production"
              target="_blank"
            >
              <img src={YouTube} alt="youtube" height="40" width="50" />
            </a>
          </div>
        </div>
        <div className="useful-links">
          <h4>Useful Links</h4>
          <div className="link-menues">
            <div className="link-menu-1">
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/events">Events</a>
              <a href="/children">Children</a>
            </div>
            <div className="link-menu-2">
              <a href="/boishakh">Pohela Boishakh</a>
              <a href="/ekCupCha">Ek Cup Cha</a>
              <a href="/kpCulture">Cultural Events</a>
              <a href="/kpNews">Karigor News</a>
            </div>
          </div>
        </div>
        <div className="footer-contact-us">
          <h4>Contact Us</h4>
          <div className="location-address">
            <a href="/">
              <img src={Location} alt="location" height="50" width="50" />
            </a>
            <a
              href="https://www.google.com/maps/@26.6229841,-80.1158108,3a,75y,274.5h,90t/data=!3m6!1e1!3m4!1sdGWJyKVny4bUXrWa2BcDRw!2e0!7i16384!8i8192?entry=ttu"
              target="_blank"
            >
              <div>
                <p className="location-address">3726 Nyack Lane</p>
                <p className="location-address">Lake Worth, FL-33463</p>
              </div>
            </a>
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
            <a href="https://mail.google.com/mail/u/2/#inbox">
              <img src={Email} alt="email" height="40" width="40" />
            </a>
            <a href="/">
              <p className="email-address">kptv24@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="karigor-sponsors">
          <h4>Our Proud Sponsors</h4>
          <div className="sponsors-items">
            <a href="https://demanddistribution.com/" target="_blank">
              <img src={DemandDistr} alt="demand" height="32" width="35" />
            </a>
            <a href="https://demanddistribution.com/" target="_blank">
              <p>Demand Distributions</p>
            </a>
          </div>
          <div className="sponsors-items">
            <a href="https://miamikdistribution.com/" target="_blank">
              <img src={MiamiKDistr} alt="miamiK" height="35" width="130" />
            </a>
            <a href="https://miamikdistribution.com/" target="_blank">
              <p>Miami K Distributions</p>
            </a>
          </div>
          <div className="sponsors-items">
            <a href="https://nepa2wholesale.com/" target="_blank">
              <img src={NepaWholesale} alt="email" height="35" width="130" />
            </a>
            <a href="https://nepa2wholesale.com/" target="_blank">
              <p>NEPA Wholesale</p>
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className="copyright-note">
        <p>Copyright @</p>
        <a href="https://psptech.net/" target="_blank">
          <img src={pspTechLogo} alt="psptech" height="35" width="35" />
        </a>
        <a href="https://psptech.net/" target="_blank">
          <p>PSP Technology Inc</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
