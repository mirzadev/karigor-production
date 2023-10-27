import homeOverview_1 from "../Assets/homePage/overview-1.jpg";
import homeOverview_2 from "../Assets/homePage/overview-6.jpg";
import karigorMission from "../Assets/homePage/overview-3.jpg";
import karigorHistory from "../Assets/homePage/overview-4.jpg";
import karigorHistory1 from "../Assets/homePage/overview-5.jpg";
import karigorMissionA from "../Assets/homePage/overview-6.png";
import karigorMissionB from "../Assets/homePage/overview-7.png";
import karigorMissionC from "../Assets/homePage/overview-8.png";
import karigorMissionD from "../Assets/homePage/overview-9.png";
import karigorMissionE from "../Assets/homePage/overview-10.png";
import karigorMissionF from "../Assets/homePage/overview-11.png";
import karigorMissionG from "../Assets/homePage/overview-12.png";
import karigorMissionH from "../Assets/homePage/overview-13.png";
import "./OverviewStyles.css";
import OverviewData from "./OverviewData";
const Overview = () => {
  return (
    <div className="overview">
      <h1>General Overview of Karigor</h1>
      <p>
        A cultural organization that completely works with local Bangladeshi
        talents
      </p>
      <OverviewData
        heading="Karigor Production"
        text="Karigor Production and Cultural Society is a cultural organization and a production house located in West Palm Beach, Florida, USA. Since inception, the organization is dedicated to upholding the cultural heritage of Bangladesh in US soil. Members of Karigor come from different social, educational, religion and age backgrounds. One of the main aims of this organization is to keep our future generation updated about the cultural diversity of Bangladesh. Every year with the generous assistance of Bangladeshi community, Bengali new year festival 'Pohela Boishakh' is arranged. In this program people from all levels and ages take part sportingly. Besides, in Asian Food Fare, FOBANA or in any other cultural activities Karigor's participation is the main attraction to the audience. This Organization is full of local talents where everyone extends their services voluntarily. The organization is capable of organizing all kinds of stage shows, programs, and cultural activities using their own resources. With the passage of time, now Karigor is a symbol of trust and Bangladeshi flag bearer to all Bangladeshis in Florida and as well as USA."
        img1={homeOverview_1}
        img2={homeOverview_2}
      />

      <div className="history-des">
        <div className="history-image">
          <div>
            <img alt="img" src={karigorHistory} />
          </div>
          <div className="history-image-2">
            <img alt="img" src={karigorHistory1} />
          </div>
        </div>
        <div className="history-text">
          <h2>Karigor History</h2>
          <p>
            Karigor Production started its journey with culturally reach 5 young
            and energetic members of Bangladeshi community name - Tipu, Rony,
            Anik, Rocky and Shaikh. After glorious victory of Bangladesh Cricket
            team in 2014, Karigor produced their first promo - Bangladesh World
            Cup Flash Mob and then a short film - Unlimited Shoe where both were
            highly appreciated by the community people. This greatly inspired
            the Karigor members to work more and produce some dramas like Onir
            Golpo, advertisement for all Bangladeshi organizations, Anando Mela,
            and few successful cultural programs.
          </p>
          <p>
            From the year 2015 Karigor started organizing Pohela Boishakh in
            small scale in the living room of one of the members. This was
            another success and with popular demand of Bangladeshi community,
            Karigor started organizing Pohela Boishakh in Royal Palm Beach -
            Renesa Park. Brian Park and currently at German Club in Lake Worth.
            Karigor organizes this Pohela Boishakh every year with same concept
            as Ramna Park Dhaka, Bangladesh. The program includes live
            performances by the members - Mongol Sobha Jatra, Jatra Pala, Folk
            Songs, Gombhira, dance, recitation etc, where our children get
            priority.
          </p>
          <p>
            Childrens are our future. Accordingly, Karigor always practices rich
            Bangladeshi culture and injected the same among the Childrens of
            Bangladeshi community. Most of the cultural programs have maximum
            number of children participation. Till now Karigor has successfully
            trained more than 100s of children on Bangladeshi culture. Karigor
            organizes KP News, a lot of reality shows like Evening with Bristi
            and Ek Cup Cha, and cultural festivals which all are very popular to
            the community.
          </p>
        </div>
      </div>

      <div className="mission-des">
        <div className="mission-text">
          <h2>Karigor Mission</h2>
          <p>
            Karigor mission is selected considering the cultural heritage of
            Bangladesh and the children who are born and lives in USA. These
            Childrens normally has to adopt two cultures i.e., American, and
            also Bangladesh. Therefore, Karigor Production selected their
            mission as under:
          </p>
          <p className="mission-statement">
            To retain and practice Bangladeshi rich culture in USA and inject
            the same in next Bangladeshi origin generations.
          </p>
          <div className="karigor-mission">
            <img alt="img" src={karigorMissionA} />
            <img alt="img" src={karigorMissionC} />
            <img alt="img" src={karigorMissionB} />
            <img alt="img" src={karigorMissionD} />
            <img alt="img" src={karigorMissionE} />
            <img alt="img" src={karigorMissionF} />
            <img alt="img" src={karigorMissionG} />
            <img alt="img" src={karigorMissionH} />
          </div>
        </div>
        <div className="mission-image">
          <img alt="img" src={karigorMission} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
