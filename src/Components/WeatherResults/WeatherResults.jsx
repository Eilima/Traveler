import React from "react";

export class WeatherResults extends React.Component {
  render() {
    return (
      <div>
        <p>Weather Results</p>
        <p>{this.props.weatherInfo.location}</p>
        <p>{this.props.weatherInfo.temperature}</p>
        <p>{this.props.weatherInfo.humidity}</p>
        <p>{this.props.weatherInfo.description}</p>
      </div>
    );
  }
}
