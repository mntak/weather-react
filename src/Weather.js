import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Weatherinfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function displayWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "ac1c40046d1b3bee98912c18df6a03ec";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form onSubmit={handleSubmit} id="search-form">
            <input
              type="search"
              placeholder="Enter city here"
              id="city-input"
              onChange={updateCity}
            />
            <input className="search" type="submit" value="Search" />
          </form>
          <br />
          <button id="current-location">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtk8wG5fyPio-QSH9xquSog0D-Ff-MF0kMQ&usqp=CAU"
              id="pin"
              width="25"
              alt=""
            />
            Current location
          </button>
          <div className="overview">
            <Weatherinfo data={weatherData} />
          </div>
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <footer>
          <a
            href="https://github.com/mntak/weather-react"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>
          , by{" "}
          <a
            href="https://friendly-mayer-5513d1.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Mihae Tak
          </a>
        </footer>
      </div>
    );
  } else {
    search();

    return null;
  }
}
