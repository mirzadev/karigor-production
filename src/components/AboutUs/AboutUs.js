import "./AboutUsStyles.css";
import karigorVision from "../Assets/Karigor-8.jpg";
import karigorObjectives from "../Assets/Karigor-9.jpg";
function AboutUs() {
  return (
    <div className="about-container">
      <div className="vision-des">
        <div className="vision-image">
          <img alt="img" src={karigorVision} />
        </div>
        <div className="vision-text">
          <h2>Karigor Vision</h2>
          <p>
            To retain and practice Bangladeshi rich culture in USA and inject
            the same in next generation.
          </p>
        </div>
      </div>
      <div className="objective-des">
        <div className="objective-text">
          <h2>Karigor Objectives</h2>
          <p>
            <ul>
              <li>
                To practice Bangladeshi culture in USA keeping full respect on
                American culture and pride.
              </li>
              <li>
                Train our future generation in developing Bengali culture side
                by side American culture.
              </li>
              <li>
                Follow all kinds of Federal, State, County and City rules in
                Karigor administration.
              </li>
              <li>
                Maintain very good relation with all other orgations in Florida
                and USA.
              </li>
            </ul>
          </p>
        </div>
        <div className="objective-image">
          <img alt="img" src={karigorObjectives} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
