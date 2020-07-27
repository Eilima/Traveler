import React from "react";

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
    e.preventDefault();
    console.log("handleWeatherSearch");
  };

  render() {
    return (
      <div>
        <form>
          <input placeholder="Location/City" onChange={this.changeCityName} />
          <button onClick={this.handleWeatherSearch}>Submit</button>
        </form>
      </div>
    );
  }
}
