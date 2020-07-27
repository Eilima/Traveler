import React, { useState } from "react";
import "./App.css";
import { SearchBar } from "./Components/SearchBar/SeachBar";
import { WeatherResults } from "./Components/WeatherResults/WeatherResults";
import { YelpResults } from "./Components/YelpResults/YelpResults";

function App() {
  const [cityName, setCityName] = useState(null);

  const handleCityNameChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="App">
      <SearchBar handleChange={handleCityNameChange} cityName={cityName} />
      <WeatherResults />
      <YelpResults />
    </div>
  );
}

export default App;
