import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props){
   let [ready, setReady] = useState(false);
   let [forecast, setForecast] = useState(null);
   function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);

   }
   
    if (ready) {
        return(
    <div className="row forecast">
        <div className="col">
          <ForecastDay data={forecast[1]}/>
        </div>
        <div className="col">
          <ForecastDay data={forecast[2]}/>
        </div>
        <div className="col">
          <ForecastDay data={forecast[3]}/>
        </div>
        <div className="col">
          <ForecastDay data={forecast[4]}/>
        </div>
        <div className="col">
          <ForecastDay data={forecast[5]}/>
        </div>
    </div>
        );
    } else {

    let apiKey ="d8e366c15b60dabbe9f54b799921805a";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=-${lon}&exclude=hourly,daily&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;

    }
  
}