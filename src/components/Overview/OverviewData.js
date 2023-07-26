import { Component } from "react";
import "./OverviewStyles.css";

class OverviewData extends Component {
  render() {
    return (
      <div className="overview-des">
        <div className="overview-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="home-image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default OverviewData;
