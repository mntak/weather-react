import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp_max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp_min);
    return `${temperature}º`;
  }
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {""}
          <FormattedDate date={props.data.date} />
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
          ></a>{" "}
          <a href="/" rel="noreferrer" id="celcius-link"></a>
        </span>
        <span>
          <WeatherIcon code={props.data.icon} size={72} />
        </span>

        <div className="row">
          <div className="col-6">
            <h4>
              Today's Highs & Lows <br />
              <span id="current-high">{maxTemperature()}</span>°F
              <span id="current-low">{minTemperature()}</span>°F
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
          <span id="feels-ike">{Math.round(props.data.feels_like)}°</span>
          <br />
          <span id="wind">{Math.round(props.data.wind)} mph Wind</span>
          <br />
          <span id="humidity">{Math.round(props.data.humidity)}% Humidity</span>
        </h5>
      </div>
    </div>
  );
}
