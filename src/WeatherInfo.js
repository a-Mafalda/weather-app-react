import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  let WeatherInformation = {
    MinTemp: "15",
    MaxTemp: "20",
    Humidity: "40",
    Wind: "3"
  };
  return (
    <div className="row weather-info">
      <div className="col-6">
        Min: {WeatherInformation.MinTemp}
        <span></span>°C
      </div>
      <div className="col-6">
        Max: {WeatherInformation.MaxTemp}
        <span></span>°C
      </div>
      <div className="col-6">
        Humidity: {WeatherInformation.Humidity}
        <span></span>%
      </div>
      <div className="col-6">
        Wind: {WeatherInformation.Wind} <span></span> m/s
      </div>
    </div>
  );
}
