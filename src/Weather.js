import React from "react";
import Forecast from "./Forecast.js";
import MainInfo from "./MainInfo";
import WeatherInfo from "./WeatherInfo.js";
import FavouriteCities from "./FavouriteCities.js";
import SearchEngine from "./SearchEngine.js";
import Footnote from "./Footnote.js";
import "./Weather.css";

export default function Weather() {
  return (
   
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
     );
}
