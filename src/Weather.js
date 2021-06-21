import React from "react";

import "./Weather.css";

import Forecast from "./Forecast.js";
import MainInfo from "./MainInfo";
import WeatherInfo from "./WeatherInfo.js";
import FavouriteCities from "./FavouriteCities.js";
import SearchEngine from "./SearchEngine.js";
import Footnote from "./Footnote.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Forecast />
            <MainInfo />
            <br />
            <hr />
            <WeatherInfo />
            <hr />
            <FavouriteCities />
            <hr />

            <SearchEngine />
          </div>
          <Footnote />
        </div>
      </div>
    </div>
  );
}
