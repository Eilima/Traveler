import React from "react";

import "./SearchBar.css";

export class SearchBar extends React.Component {
  state = {
    cityName: null,
  };

  changeCityName = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  handleWeatherSearch = (e) => {
    this.props.searchOpenWeatherMap(this.state.cityName);
    this.props.searchYelp(this.state.cityName);
    e.preventDefault();
  };

  render() {
    return (
      <div className="search-bar">
        <form>
          <input placeholder="Location/City" onChange={this.changeCityName} />
          <button onClick={this.handleWeatherSearch}>Submit</button>
        </form>
      </div>
    );
  }
}
