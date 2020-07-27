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
    console.log("start of call");
    OpenWeatherMap.weatherSearch(cityName).then(
      changeLocation(OpenWeatherMap.location),
      changeTemperature(OpenWeatherMap.temperature),
      changeHumidity(OpenWeatherMap.humidity),
      changeDescription(OpenWeatherMap.description)
    );

    console.log("weather api called");
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
