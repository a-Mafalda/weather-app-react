import React, { useState }  from "react";
import axios from "axios";
import Forecast from "./Forecast.js";
import FormatDate from "./FormatDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import Footnote from "./Footnote.js";
import WeatherIcon from "./WeatherIcon.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
     ready: true,
     coord: response.data.coord,
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
            <Forecast coordinates={weatherData.coord}/>
            <div className="mainInfo">
              <div className="mainPicture">
       < WeatherIcon code={weatherData.icon} size={140} color="#c6b0d5"/>
     </div>
      <br/>
       <br/>
      <ul className="weatherInfo">
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
      <WeatherTemperature celsius={(weatherData.temperature)}/>
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
    <div className="search"> 
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
           <input
              onChange={updateCity}
              type="search"
              placeholder="Let's go somewhere..."
              className="form-control-sm mb-3"
              autoFocus={true}
            />
            </div>

        <div className="col-3">
          <input type="submit" className="form-control-sm btn" value="Go!" />
      </div>
      </div>
      </form>
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
