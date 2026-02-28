import "./EventsUpcomingStyles.css";
import upcomingEvent from "../Assets/upcomingEvent/UpcomingEvent.jpg";
// import upcomingEvent_1 from "../Assets/upcomingEvent/UpcomingEvent_1.jpg";

function EventUpcoming() {
  return (
    <div className="upcoming-container">
      <h1>Karigor Upcoming Events</h1>
      <div>
        <h2>Pohela Boishakh - 2026</h2>
        <h3>May 17, 2026, Sunday</h3>
        <h3>Wellington Amphitheater, LakeWorth, Florida</h3>
        <p>12100 Forest Hill Blvd, Wellington, FL-33414</p>
        <p>From 3pm To 10pm EST</p>
      </div>
      <div className="upcoming-event">
        <img alt="img" src={upcomingEvent} />
        {/* <img alt="img" src={upcomingEvent_1} /> */}
      </div>
    </div>
  );
}

export default EventUpcoming;
