import React from "react";
import OpenWeatherMap from "../../utils/OpenWeatherMap";

export class SearchBar extends React.Component {
  state = {
    location: null,
    temperature: null,
    humidity: null,
    description: null,
  };

  searchOpenWeatherMap(cityName) {
    console.log("start of call");
    const weatherInfo = OpenWeatherMap.weatherSearch(cityName);

    this.setState({
      location: weatherInfo.location,
      temperature: weatherInfo.temperature,
      humidity: weatherInfo.humidity,
      description: weatherInfo.description,
    });
    console.log("weather api called");
  }

  handleSubmit = (e) => {
    this.searchOpenWeatherMap(this.props.cityName);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Location/City"
            onChange={this.props.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
