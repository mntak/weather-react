import React, { useState } from "react";
export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span className="Temperature">
        <span className="main">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          Cº |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            F
          </a>
        </span>{" "}
      </span>
    );
  } else {
    return (
      <span className="Temperature">
        <span className="main">{Math.round(fahrenheit())}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            Cº |
          </a>{" "}
          F
        </span>{" "}
      </span>
    );
  }
}
