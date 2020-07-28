import React, { useState } from "react";
import "./App.css";
import { SearchBar } from "./Components/SearchBar/SeachBar";
import { WeatherResults } from "./Components/WeatherResults/WeatherResults";
import { YelpResults } from "./Components/YelpResults/YelpResults";

import OpenWeatherMap from "./utils/OpenWeatherMap";
import Yelp from "./utils/Yelp";

function App() {
  const [location, changeLocation] = useState(null);
  const [temperature, changeTemperature] = useState(null);
  const [humidity, changeHumidity] = useState(null);
  const [description, changeDescription] = useState(null);
  const weatherInfo = { location, temperature, humidity, description };

  const searchOpenWeatherMap = (cityName) => {
    OpenWeatherMap.weatherSearch(cityName).then((weather) => {
      changeLocation(weather.location);
      changeTemperature(weather.temperature);
      changeHumidity(weather.humidity);
      changeDescription(weather.description);
    });
  };

  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (cityName) => {
    Yelp.yelpSearch(cityName).then((business) => {
      setBusinesses(business);
    });
    console.log(businesses);
  };

  return (
    <div className="App">
      <SearchBar
        searchOpenWeatherMap={searchOpenWeatherMap}
        searchYelp={searchYelp}
      />
      <WeatherResults weatherInfo={weatherInfo} />
      <YelpResults businesses={businesses} />
    </div>
  );
}

export default App;
