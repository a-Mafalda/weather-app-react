import React, { useState }  from "react";
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';
import Forecast from "./Forecast.js";
import FavouriteCities from "./FavouriteCities.js";
import SearchEngine from "./SearchEngine.js";
import Footnote from "./Footnote.js";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    
    setWeatherData({
     ready: true,
     temperature: response.data.main.temp, 
     wind: response.data.wind.speed,
     date: "Monday, June 21 14:20", 
     humidity: response.data.main.humidity,
     minTemp: response.data.main.temp_min,
     maxTemp: response.data.main.temp_max,
     countryCode: response.data.sys.country,
     description: response.data.weather[0].description,
     city: response.data.name,
     
 });
 
}

if (weatherData.ready) {
  return (
   <div className="weather-app-wrapper">
          <div className="weather-app">
            <Forecast />
            <div className="mainInfo">
     <div className="mainPicture">
        <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#c6b0d5"
        size={110}
        animate={true}
        />
      </div>
      <br/>
       <br/>
      <ul>
        <li className="default-city">
          <span>{weatherData.city}</span>, {""}
          <span className="countryCode">{weatherData.countryCode} {""}</span>
          <span>{weatherData.description}</span>
        </li>
        <li className="current-date">{weatherData.date}</li>
      </ul>
      <div className="main-temp">
      <strong>{Math.round(weatherData.temperature)}</strong>
      <span className="units">
        <a href="/" className="active">
          °C{" "}
        </a>
        | <a href="/">°F </a>
      </span>
    </div>
      <br/>
      <hr/>
    <div className="row weather-info">
      <div className="col-6">
        Min: 
        <span>{weatherData.minTemp}</span>°C
      </div>
      <div className="col-6">
        Max: 
        <span>{weatherData.maxTemp}</span>°C
      </div>
      <div className="col-6">
        Humidity: 
        <span>{weatherData.humidity}</span>%
      </div>
      <div className="col-6">
        Wind: <span>{weatherData.wind}</span> m/s
      </div>
    </div>
    </div>
           <hr />
            <FavouriteCities />
            <hr />

            <SearchEngine />
          </div>
          <Footnote />
        </div>
     );

} else {
  const apiKey = `24339c80e2bf7704d552d34cc3af1800`;
  let aipUrl = `https://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=${apiKey}&units=metric`;
  axios.get(aipUrl).then(handleResponse);

  return "Loading...";
}
  
}
