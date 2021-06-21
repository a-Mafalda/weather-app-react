import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weekly-forecast" id="forecast">
      <div className="row">
        <div className="col-md-3">
          MON️️ <img src="/" alt="" width="30px" />
        </div>
        <div className="col-md-3">
          TUE <img src="/" alt="" width="30px" />
        </div>
        <div className="col-md-3">
          WED <img src="/" alt="" width="30px" />
        </div>
        <div className="col-md-3">
          THU <img src="/" alt="" width="30px" />
        </div>
      </div>
    </div>
  );
}