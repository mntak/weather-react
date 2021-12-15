import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  
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

        <span>
          <WeatherIcon code={props.data.icon} size={72} />
        </span>

        <div className="row">
          <div className="col-6">
            <h4>
              Today's Condition <br />
              
            </h4>
          </div>
        </div>
      </div>
      <div className="col-6">
        <h5>
          <span id="weather-description"> {props.data.description}</span>
          <br />
          
         
          <span id="wind">{Math.round(props.data.wind)} mph Wind</span>
          <br />
          <span id="humidity">{Math.round(props.data.humidity)}% Humidity</span>
        </h5>
      </div>
    </div>
  );
}
