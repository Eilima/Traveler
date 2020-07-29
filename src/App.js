import React, { useState } from "react";
import "./App.css";
import { SearchBar } from "./Components/SearchBar/SeachBar";
import { WeatherResults } from "./Components/WeatherResults/WeatherResults";
import { YelpResults } from "./Components/YelpResults/YelpResults";

import OpenWeatherMap from "./utils/OpenWeatherMap";
import Yelp from "./utils/Yelp";

function App() {
  // Initializing hooks/state intended to be used to store information returned from the OpenWeatherMap API
  const [location, changeLocation] = useState(null);
  const [temperature, changeTemperature] = useState(null);
  const [humidity, changeHumidity] = useState(null);
  const [description, changeDescription] = useState(null);
  const [code, changeCode] = useState(null);

  // Saving the hooks/state inside an object to be given access to a child component
  const weatherInfo = { location, temperature, humidity, description, code };

  // Function that will call the OpenWeatherMap API and handle the value it returns
  const searchOpenWeatherMap = (cityName) => {
    // Call OpenWeatherMap API with the parameter of the cities name entered in the search bar
    OpenWeatherMap.weatherSearch(cityName).then((weather) => {
      if (weather.code !== 200) {
        changeCode(weather.code);
      } else {
        changeLocation(weather.location);
        changeTemperature(weather.temperature);
        changeHumidity(weather.humidity);
        changeDescription(weather.description);
        changeCode(weather.code);
      }
    });
  };

  // Initialize state for array that will store objects storing business information
  const [businesses, setBusinesses] = useState([]);

  // Function that will call Yelp API
  const searchYelp = (cityName) => {
    // Call Yelp API and handle return value by storing them in a array
    Yelp.yelpSearch(cityName).then((business) => {
      setBusinesses(business);
    });
    console.log(businesses);
  };

  return (
    <div className="App">
      {/* Render SearchBar component and pass it down the two functions that call the API's */}
      <SearchBar
        searchOpenWeatherMap={searchOpenWeatherMap}
        searchYelp={searchYelp}
      />
      {/* Render components and pass data from API's  */}
      <WeatherResults weatherInfo={weatherInfo} />
      <YelpResults businesses={businesses} />
    </div>
  );
}

export default App;
