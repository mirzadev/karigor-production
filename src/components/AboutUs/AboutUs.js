import "./AboutUsStyles.css";
import karigorVision from "../Assets/Karigor-8.jpg";
import karigorObjectives from "../Assets/Karigor-9.jpg";
import karigorMissionA from "../Assets/homePage/overview-6.png";
import karigorMissionB from "../Assets/homePage/overview-7.png";
import karigorMissionC from "../Assets/homePage/overview-8.png";
import karigorMissionD from "../Assets/homePage/overview-9.png";
import karigorMissionE from "../Assets/homePage/overview-10.png";
import karigorMissionF from "../Assets/homePage/overview-11.png";
import karigorMissionG from "../Assets/homePage/overview-12.png";
import karigorMissionH from "../Assets/homePage/overview-13.png";
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
            Karigor Production is a reputed organization in south Florida. Their
            journey started with the aim to continue practicing and also
            injecting the rich Bangladeshi culture among the community including
            the children. Bangladesh is a country that is full of cultural
            heritages where most of the districts has their own culture and
            specialty. Therefore, Karigor's vision is to implement all these
            gradually irrespective of race, region and religious differences.
            Within ten years of inception, Karigor should have a strong
            structure and credibility in the society. In the next twenty years
            they will gradually add different cultural heritage into their
            practices. Importance will be given on childrens by proper
            motivation and involvement in all kinds of religious, festival,
            cultural, language and education activities.
          </p>
        </div>
      </div>
      <div className="objective-des">
        <div className="objective-text">
          <h2>Karigor Objectives</h2>
          <p>
            <ul className="objective-list">
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
                Maintain very good relationship with all other organizations in
                Florida and USA.
              </li>
              <li>
                Organize cultural shows on all nationally recognized events
                maintaining the cultural heritage of Bangladesh.
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
