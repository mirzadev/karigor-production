import "./HomeEventStyle.css";

function HomeEventData(props) {
  const handleClick = () => {
    console.log("hello World");
  };
  return (
    <div className="homeEventDataCart">
      <div className="homeEventDataCart-image">
        <img src={props.image} alt="image" />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <a href={props.url}>
        <button onClick={handleClick} className="event-button">
          Event Details
        </button>
      </a>
    </div>
  );
}

export default HomeEventData;
