import React from "react";

import "./WeatherResults.css";

export class WeatherResults extends React.Component {
  // Function that will render different types of html depending on the situation i.e. Error, empty search etc.
  weatherInformation = () => {
    if (this.props.weatherInfo.code === null) {
      console.log(this.props.weatherInfo.code);
      return <div></div>;
    } else if (this.props.weatherInfo.code !== 200) {
      return (
        <div>
          <p>ERROR</p>
        </div>
      );
    } else {
      return (
        <div className="weather-card">
          <h3>Weather</h3>
          <p>{this.props.weatherInfo.location}</p>
          <div className="horizontal-weather-description">
            <p>{this.props.weatherInfo.temperature}°C</p>
            <p>{this.props.weatherInfo.humidity}%</p>
            <p>{this.props.weatherInfo.description}</p>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div>{this.weatherInformation()}</div>;
  }
}
