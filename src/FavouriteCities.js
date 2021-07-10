import React from "react";
import "./FavouriteCities.css";

export default function FavouriteCities() {
  return (
    <div class="row favorite-cities">
      <div class="col-md-3">
        <a href="/" className="city1" >
          Paris
        </a>
      </div>
      <div class="col-md-3">
        <a href="/" className="city1" >
          Berlin
        </a>
      </div>
      <div class="col-md-3">
        <a href="/" className="city1">
          Madrid
        </a>
      </div>
      <div class="col-md-3">
        <a href="/" className="city1" >
          London
        </a>
      </div>
    </div>
  );
}