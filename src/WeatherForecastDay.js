import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="weather-forecast-day">{day()}</div>
      <WeatherIcon code={"01d"} size={32} />
      <span className="weather-forecast-day-max">{maxTemperature()}</span>
      <span className="weather-forecast-day-min"> {minTemperature()}</span>
    </div>
  );
}
