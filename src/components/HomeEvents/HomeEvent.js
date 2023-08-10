import "./HomeEventStyle.css";
import HomeEventData from "./HomeEventData";
import HomeEvent1 from "../Assets/homeEventImage/Karigor-5.jpg";

import HomeEvent4 from "../Assets/homeEventImage/ekCupCha1.jpg";

import HomeEvent7 from "../Assets/homeEventImage/Karigor-7.jpg";

import HomeEvent10 from "../Assets/homeEventImage/kpNews1.jpg";
import PohelaBoishakh from "../EventBoishakh/PohelaBoishakh";

function HomeEvent() {
  return (
    <div className="home-event">
      <h1>Karigor Events</h1>
      <p>Select the Karigor event you want</p>
      <div className="home-event-cart">
        <HomeEventData
          image={HomeEvent1}
          heading="Pohela Boishakh"
          text="Karigor celebrates Pohela Boishakh Every Year which is first day of Bengali New Year"
          url="/boishakh"
        />

        <HomeEventData
          image={HomeEvent4}
          heading="Ek Cup Cha"
          text="Karigor organizes reality talk show with the Bangladeshi professionals from different professions and focuses on their success story. Each of the show are very popular and has become as one of the most prestegious Bangladesh show in South Florida."
          url="/ekCupCha"
        />

        <HomeEventData
          image={HomeEvent7}
          heading="Cultural Shows"
          text="Karigor organizes different cultural shows including Anando Mela, Drama, musical events or picnics. Each of these are very popular to the Bangladeshi community"
        />

        <HomeEventData
          image={HomeEvent10}
          heading="KP News"
          text="KP news always brings out the updated news for Bangladeshi that covers the local, national or international events related to Bangladeshi community."
        />
      </div>
    </div>
  );
}

export default HomeEvent;
