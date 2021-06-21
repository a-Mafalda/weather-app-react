import React from "react";

import "./Footnote.css";

export default function Footnote() {
  return (
    <small>
      <a
        href="https://github.com/a-Mafalda/weather-app-react"
        target="_blank"
        className="footnote"
        rel="noreferrer"
      >
        Open-sourced code
      </a>
      , by Mafalda Fonseca.
    </small>
  );
}