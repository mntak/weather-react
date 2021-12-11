import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Honolulu",
    temperature: 50,
    high: 80,
    low: 72,
    description: "Partly Cloudy",
    feels: 77,
    date: "Wednesday 7:40",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 75,
    wind: 8,
  };

  return (
    <div class="container">
      <div className="weather-app">
        <form id="search-form">
          <input type="search" placeholder="Enter city here" id="city-input" />
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
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li>
              <span id="date">{weatherData.date}</span>
            </li>
          </ul>
        </div>

        <div className="current-temp" id="current-temp">
          <span className="current-temperature" id="temperature">
            {weatherData.temperature}
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

          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            id="icon"
            width="150"
            alt=""
          />

          <div className="row">
            <div className="col-6">
              <h4>
                Today's High & Low <br />
                <span id="current-high">{weatherData.high}</span>°F
                <span id="current-low">{weatherData.low}</span>°F
              </h4>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h5>
            <span id="weather-description"> {weatherData.description}</span>
            <br />
            Feels like <span id="feels-ike">{weatherData.feels}°</span>
            <br />
            <span id="wind">{weatherData.wind} mph Wind</span>
            <br />
            <span id="humidity">{weatherData.humidity}% Humidity</span>
          </h5>
        </div>

        <div className="weather-forecast" id="forecast"></div>
      </div>
      <footer>
        <a
          href="https://github.com/mntak/Tak-Weather-App"
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
}
