import React from "react";

import "./SearchBar.css";

export class SearchBar extends React.Component {
  // Initiate state to hold name of city
  state = {
    cityName: null,
  };
  // Funciton that will alter the state value with the current text in the input field
  changeCityName = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };
  // Function that calls the function stored in props while passing the state of the city name
  handleWeatherSearch = (e) => {
    this.props.searchOpenWeatherMap(this.state.cityName);
    this.props.searchYelp(this.state.cityName);
    e.preventDefault();
  };

  render() {
    return (
      <div className="search-bar">
        <form>
          {/* When text entered in input field it will call changeCityName function */}
          <input placeholder="Location/City" onChange={this.changeCityName} />
          {/* When clicked handleWeatherSearch function will be called */}
          <button onClick={this.handleWeatherSearch}>Submit</button>
        </form>
      </div>
    );
  }
}
