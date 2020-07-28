import React, { useState } from "react";
import "./App.css";
import { SearchBar } from "./Components/SearchBar/SeachBar";
import { WeatherResults } from "./Components/WeatherResults/WeatherResults";
import { YelpResults } from "./Components/YelpResults/YelpResults";

import OpenWeatherMap from "./utils/OpenWeatherMap";

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

  return (
    <div className="App">
      <SearchBar searchOpenWeatherMap={searchOpenWeatherMap} />
      <WeatherResults weatherInfo={weatherInfo} />
      <YelpResults />
    </div>
  );
}

export default App;
