import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Hello ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
  );
}
