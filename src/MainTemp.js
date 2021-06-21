import React from "react";
import "./MainTemp.css";

export default function MainTemp() {
  let Temperature = {
    now: "30"
  };
  return (
    <div className="main-temp">
      <strong>{Temperature.now}</strong>
      <span className="units">
        <a href="/" className="active">
          °C{" "}
        </a>
        | <a href="/">°F </a>
      </span>
    </div>
  );
}