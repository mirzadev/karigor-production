import "./ContactFormStyles.css";
import FaceBook from "../Assets/footerItem/Facebook.png";
import Twiter from "../Assets/footerItem/Twiter.png";
import YouTube from "../Assets/footerItem/YouTube.png";

function contactForm() {
  return (
    <div className="form-container">
      <h1>Send Your Message to Karigor</h1>
      <div className="form-items">
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
        <div className="contact-sections">
          <section className="email-section">
            <div>
              <span className="fa solid alt fa-envelope"></span>
              <span>Email</span>
            </div>
            <div>
              <a id="contact_email" href="#">
                kptv24@gmail.com
              </a>
            </div>
          </section>
          <section className="phone-section">
            <div>
              <span className="fa-solid fa-phone"></span>
              <span>Phone</span>
            </div>
            <div>
              <span>1(561) 779-4154</span>
            </div>
          </section>
          <section className="address-section">
            <div>
              <span className="fa-sharp fa-solid fa-house"></span>
              <span>Address</span>
            </div>
            <div>
              <a id="address-link" href="https://goo.gl/maps/ACDRTDuS95NyYoPA8">
                3726 Nyack Lane
                <br />
                Lake Worth, FL 33463
                <br />
                United States of America
              </a>
            </div>
          </section>
          <section>
            <a href="https://www.facebook.com/kptv24">
              <img src={FaceBook} alt="facebook" height="50" width="50" />
            </a>
            <a href="/">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="50"
                width="50"
              />
            </a>
            <a href="https://www.youtube.com/@karigor_production">
              <img src={YouTube} alt="youtube" height="50" width="60" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
export default contactForm;
