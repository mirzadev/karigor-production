import "./HomeEventStyle.css";
import HomeEventData from "./HomeEventData";
import HomeEvent1 from "../Assets/homeEventImage/Karigor-5.jpg";

import HomeEvent4 from "../Assets/homeEventImage/ekCupCha1.jpg";

import HomeEvent7 from "../Assets/homeEventImage/Karigor-7.jpg";

import HomeEvent10 from "../Assets/homeEventImage/kpNews1.jpg";

function HomeEvent() {
  return (
    <div className="home-event">
      <h1>Karigor Events</h1>
      <p>Select the Karigor event you want</p>
      <div className="home-event-cart">
        <HomeEventData
          image={HomeEvent1}
          heading="Pohela Boishakh"
          text="Karigor celebrates Pohela Boishakh Every Year which is first day of Bengali New Year. The program is organized in a style that gives same flavour like Bangladesh."
          url="/boishakh"
        />

        <HomeEventData
          image={HomeEvent4}
          heading="Ek Cup Cha"
          text="Karigor production organizes reality talk show with the Bangladeshi origin nationals from different professions and who are very successful in their own career."
          url="/ekCupCha"
        />

        <HomeEventData
          image={HomeEvent7}
          heading="Cultural Events"
          text="Karigor organizes different cultural events including Anando Mela, Drama, musical events or picnics. Each of these are very popular to the Bangladeshi community."
          url="/kpCulture"
        />

        <HomeEventData
          image={HomeEvent10}
          heading="KP News"
          text="Karigor telecasts news that always shows the updated information for Bangladeshi covering local, national or international events related to Bangladeshi community."
          url="/kpNews"
        />
      </div>
    </div>
  );
}

export default HomeEvent;
