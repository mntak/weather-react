import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [received, setReceived] = useState(false);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    setReceived(false);
  }, [props.coordinates]);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setReceived(true);
  }

  if (received) {
    return (
      <div className="Weather-forecast">
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-2">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let units = "imperial";
    let apiKey = "0bb228d4ba422107531b795fe6ca39d9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleForecast);

    return null;
  }
}
