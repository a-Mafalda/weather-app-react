import axios from "axios";
import React, { useState, useEffect, } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

 useEffect(() => {
setLoaded(false);
 }, [props.coordinates]);

  function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
  }

  function day(){
    let date = new Date(forecast[0].dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  function load() {
  let apiKey = `24339c80e2bf7704d552d34cc3af1800`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
    <div className="weekly-forecast">
      <div className="row" >
        {forecast.map(function(dailyForecast, index) {
         if (index < 4) {
           return(
            <div className="col-md-3" key={index}>
        {day(dailyForecast)} {" "} 
        <WeatherIcon code={dailyForecast.weather[0].icon} size={25} color="#676767"/>
        </div>
        );
        } else {
          return null;
        }
      })}
        </div>
      </div>
    );

  } else {
      load() 
    return null;
}
 }