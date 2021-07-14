import React from "react";
import "./Footnote.css";


export default function Footnote() {
  return (
    <small className="footnote">
      <a
        href="https://github.com/a-Mafalda/weather-app-react"
        target="_blank"
        
        rel="noreferrer"
        
      >
        Open-sourced code
      </a>
      , by Mafalda Fonseca.
    </small>
  );
}