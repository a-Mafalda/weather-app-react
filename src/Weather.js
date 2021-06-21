import React from "react";
import axios from "axios";

export default function Weather(props){
 
 function displayTemperature(response) {
        let temperature = (Math.round(response.data.main.temp))
    
alert(`The weather in ${response.data.name} is ${temperature}°C`)
   } 
let ApiKey = `24339c80e2bf7704d552d34cc3af1800`;
let Url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${ApiKey}&units=metric`;
axios.get(Url).then(displayTemperature);
return <h2>Hello from Mafalda</h2>
}