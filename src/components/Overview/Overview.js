import homeOverview_1 from "../Assets/homePage/overview-1.jpg";
import homeOverview_2 from "../Assets/homePage/overview-2.jpg";
import karigorMission from "../Assets/homePage/overview-3.jpg";
import karigorHistory from "../Assets/homePage/overview-4.jpg";
import "./OverviewStyles.css";
import OverviewData from "./OverviewData";
const Overview = () => {
  return (
    <div className="overview">
      <h1>General Overview of Karigor</h1>
      <p>
        A cultural organization that completely works with local Bangladeshi
        talents{" "}
      </p>
      <OverviewData
        heading="Karigor Production"
        text="Karigor Production and Cultural Society is a cultural organization that mainly injects Bangladesh culture among the future generations. This Organization is full of local talents where everyone extends their service voluntarily. "
        img1={homeOverview_1}
        img2={homeOverview_2}
      />

      <div className="history-des">
        <div className="history-image">
          <img alt="img" src={karigorHistory} />
        </div>
        <div className="history-text">
          <h2>Karigor History</h2>
          <p>
            To retain and practice Bangladeshi rich culture in USA and inject
            the same in next generation. To retain and practice Bangladeshi rich
            culture in USA and inject the same in next generation. To retain and
            practice Bangladeshi rich culture in USA and inject the same in next
            generation. To retain and practice Bangladeshi rich culture in USA
            and inject the same in next generation. To retain and practice
            Bangladeshi rich culture in USA and inject the same in next
            generation.
          </p>
        </div>
      </div>

      <div className="mission-des">
        <div className="mission-text">
          <h2>Karigor Mission</h2>
          <p>
            To retain and practice Bangladeshi rich culture in USA and inject
            the same in next generation.
          </p>
        </div>
        <div className="mission-image">
          <img alt="img" src={karigorMission} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
