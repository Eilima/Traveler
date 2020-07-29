import React from "react";

export class WeatherResults extends React.Component {
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
        <div>
          <h3>Weather</h3>
          <p>{this.props.weatherInfo.location}</p>
          <p>{this.props.weatherInfo.temperature}</p>
          <p>{this.props.weatherInfo.humidity}</p>
          <p>{this.props.weatherInfo.description}</p>
        </div>
      );
    }
  };
  render() {
    return <div>{this.weatherInformation()}</div>;
  }
}
