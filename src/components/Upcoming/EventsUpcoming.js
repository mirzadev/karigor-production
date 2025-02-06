import "./EventsUpcomingStyles.css";
import upcomingEvent from "../Assets/upcomingEvent/UpcomingEvent.jpg";

function EventUpcoming() {
  return (
    <div className="upcoming-container">
      <h1>Karigor Upcoming Events</h1>
      <div>
        <h2>Pohela Boishakh - 2025</h2>
        <h3>April 27, 2025, Sunday</h3>
        <h3>Bryan Park, LakeWorth, Florida</h3>
        <p>From 3pm To 9pm EST</p>
      </div>
      <div className="upcoming-event">
        <img alt="img" src={upcomingEvent} />
      </div>
    </div>
  );
}

export default EventUpcoming;
