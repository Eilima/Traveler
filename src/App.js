import React from "react";
import "./App.css";
import { SearchBar } from "./Components/SearchBar/SeachBar";
import { WeatherResults } from "./Components/WeatherResults/WeatherResults";
import { YelpResults } from "./Components/YelpResults/YelpResults";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <WeatherResults />
      <YelpResults />
    </div>
  );
}

export default App;
