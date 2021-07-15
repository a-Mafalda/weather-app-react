import React, {useState} from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const [units, setUnits] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnits("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnits("celsius");
}
        if (units === "celsius"){
            return ( <div className="main-temp">
      <strong>{Math.round(props.celsius)}</strong>
      <span className="units">
        <span className="active"> °C </span>|
      <a href="/" onClick={convertToFahrenheit}> °F {" "}</a>
      </span>
    </div>);
} else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return ( <div className="main-temp">
      <strong>{Math.round(fahrenheit)}</strong>
      <span className="units">
        <a href="/" onClick={convertToCelsius}>
          °C{" "}
        </a>
         | <span className="active">°F </span>
      </span>
    </div>);
}

}
    
    

