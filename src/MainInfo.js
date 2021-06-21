import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./MainInfo.css";
import MainTemp from "./MainTemp";

export default function MainInfo() {
  let CurrentData = {
    city: "Lisbon",
    code: "PT",
    description: "Clear Sky",
    date: "Monday, June 21 14:20"
  };
  return (
    <div className="mainInfo">
<div className="mainPicture">

        <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#eea9a5"
        size={110}
        animate={true}
        display= "block"
        margin= "0 auto"
        padding-top= {15}
        width= {180}
        
      />
      </div>
      <br/>
      <ul>
        <li className="default-city">
          <span>{CurrentData.city}</span>, {CurrentData.code}
          <span className="countryCode"></span>
          <span> {CurrentData.description}</span>
        </li>
        <li className="current-date">{CurrentData.date}</li>
      </ul>
      <MainTemp />
    </div>
  );
}