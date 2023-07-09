import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.CName}>
        <img alt="HeroImg" id="home-cover-image" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
        <div className="hero-other-page">
          <h1 id="other-page-title">{props.titleOther}</h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
