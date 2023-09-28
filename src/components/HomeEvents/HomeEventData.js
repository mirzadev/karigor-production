import "./HomeEventStyle.css";
import { Link } from "react-router-dom";

function HomeEventData(props) {
  const handleClick = () => {
    // console.log("hello World");
  };
  return (
    <div className="homeEventDataCart">
      <div className="homeEventDataCart-image">
        <img src={props.image} alt="image" />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <Link to={props.url}>
        <button onClick={handleClick} className="event-button">
          Event Details
        </button>
      </Link>
    </div>
  );
}

export default HomeEventData;
