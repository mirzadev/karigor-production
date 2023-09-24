import "./EventsUpcomingStyles.css";
import upcomingEvent from "../Assets/upcomingEvent/UpcomingEvent.jpg";

function EventUpcoming() {
  return (
    <div className="upcoming-container">
      <h1>Karigor Upcoming Events</h1>
      <div>
        <h2>Pohela Boishakh - 2024</h2>
        <h3>April 28, 2024, Sunday</h3>
        <p>From 2pm To 10pm EST</p>
      </div>
      <div className="upcoming-event">
        <img alt="img" src={upcomingEvent} />
      </div>
    </div>
  );
}

export default EventUpcoming;
