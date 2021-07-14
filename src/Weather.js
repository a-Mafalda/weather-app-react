import React, { useState }  from "react";
import axios from "axios";
import Forecast from "./Forecast.js";
import FormatDate from "./FormatDate.js";
import FavouriteCities from "./FavouriteCities.js";
import Footnote from "./Footnote.js";
import WeatherIcon from "./WeatherIcon.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
     ready: true,
     temperature: response.data.main.temp, 
     wind: response.data.wind.speed,
     date: new Date(response.data.dt * 1000), 
     humidity: response.data.main.humidity,
     minTemp: response.data.main.temp_min,
     maxTemp: response.data.main.temp_max,
     countryCode: response.data.sys.country,
     icon: response.data.weather[0].icon,
     description: response.data.weather[0].description,
     city: response.data.name,
   
  });
 }
  
 function handleSubmit(event) {
    event.preventDefault();
    search();
    
  }
 
 function updateCity(event) {
    setCity(event.target.value);
  }

 function search(){
   const apiKey = `24339c80e2bf7704d552d34cc3af1800`;
  let aipUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(aipUrl).then(handleResponse);

 }


if (weatherData.ready) {
  return (
   <div className="weather-app-wrapper">
          <div className="weather-app">
            <Forecast />
            <div className="mainInfo">
              <div className="mainPicture">
       < WeatherIcon code={weatherData.icon} />
     </div>
      <br/>
       <br/>
      <ul>
        <li className="default-city">
          <span>{weatherData.city}</span>, {""}
          <span className="countryCode">{weatherData.countryCode} {""}</span>
          <span>{weatherData.description}</span>
        </li>
        <li className="current-date">
          <FormatDate date={weatherData.date} />
        </li>
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
        Min: {""}
        <span>{weatherData.minTemp}</span>°C
      </div>
      <div className="col-6">
        Max: {""} 
        <span>{weatherData.maxTemp}</span>°C
      </div>
      <div className="col-6">
        Humidity: {""}
        <span>{weatherData.humidity}</span>%
      </div>
      <div className="col-6">
        Wind: {""}<span>{weatherData.wind}</span> m/s
      </div>
    </div>
    </div>
           <hr />
            <FavouriteCities />
            <hr />

            <div>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <input
              onChange={updateCity}
              type="search"
              placeholder="Let's go somewhere..."
              className="form-control-sm mb-3"
              autoFocus={true}
            />
          </form>
        </div>

        <div className="col-3">
          <input type="submit" className="form-control-sm btn" value="Go!" />
        </div>

        <div className="col-3">
          <button className="form-control-sm btn border-0">
            <i className="fas fa-map-marker"></i>
          </button>
        </div>
      </div>
    </div>
  
          </div>
          <Footnote />
        </div>
     );

} else {
  search();
  return "Loading...";
}
  }
