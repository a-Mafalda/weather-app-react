import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weekly-forecast">
      
      <div className="row" >
        <div className="col-md-3">
        MON️ {" "}<ReactAnimatedWeather
        icon="WIND"
        color="#676767"
        size={30}
        animate={true}
        
        />
        </div>
        <div className="col-md-3">
          TUE {" "} <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="#676767"
        size={30}
        animate={true}
        
        />
        </div>
        <div className="col-md-3">
          WED {" "} <ReactAnimatedWeather
        icon="RAIN"
        color="#676767"
        size={30}
        animate={true}
        
        />
        </div>
        <div className="col-md-3">
          THU {" "} <ReactAnimatedWeather
        icon="CLOUDY"
        color="#676767"
        size={30}
        animate={true}
        
        />
        </div>
      </div>
      </div>
    
  );
}