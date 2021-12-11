import React from "react";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {""}
          <Date date={props.data.date} />
          {""}
        </li>
      </ul>

      <div className="current-temp" id="current-temp">
        <span className="current-temperature" id="temperature">
          <Temperature celsius={props.data.temperature} />
        </span>

        <span className="units">
          <a
            href="/"
            rel="noreferrer"
            id="fahrenheit-link"
            className="active"
            alt=""
          >
            °F
          </a>{" "}
          |
          <a href="/" rel="noreferrer" id="celcius-link">
            ºC
          </a>
        </span>
        <span>
          <WeatherIcon code={props.data.icon} size={52} />
        </span>

        <div className="row">
          <div className="col-6">
            <h4>
              Today's Highs & Lows <br />
              <span id="current-high">{weatherData.high}</span>°F
              <span id="current-low">{weatherData.low}</span>°F
            </h4>
          </div>
        </div>
      </div>
      <div className="col-6">
        <h5>
          <span id="weather-description">
            {" "}
            {Math.round(props.data.description)}
          </span>
          <br />
          Feels like{" "}
          <span id="feels-ike">{Math.round(props.data.main.feels_like)}°</span>
          <br />
          <span id="wind">{Math.round(props.data.wind)} mph Wind</span>
          <br />
          <span id="humidity">
            {Math.round(weatherData.humidity)}% Humidity
          </span>
        </h5>
      </div>
    </div>
  );
}
