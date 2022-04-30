import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertF(event) {
      event.preventDefault();
      setUnit("fahrenheit");
  }
  function convertC(event) {
      event.preventDefault();
      setUnit("celsius");
  }
  function fahrenheit(){
      return (props.celsius * 9)/5 +32;
  }
  if (unit === "celsius") {
    return (
    <div>
      <h2>
        {Math.round(props.celsius)}{" "}
        <span className="unit">
          °C | <a href="f" onClick={convertF}>°F</a>
        </span>
      </h2>
    </div>
  );  
  } else {
       return (
    <div>
      <h2>
        {Math.round(fahrenheit())}{" "}
        <span className="unit">
          <a href="f" onClick={convertC}>°C</a> | °F
        </span>
      </h2>
    </div> 
       );
  }
  
}
