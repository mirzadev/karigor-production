import "./HomeEventStyle.css";

function HomeEventData(props) {
  return (
    <div className="homeEventDataCart">
      <div className="homeEventDataCart-image">
        <img src={props.image} alt="image" />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default HomeEventData;
