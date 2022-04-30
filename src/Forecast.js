import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props){
   let [ready, setReady] = useState(false);
   let [forecast, setForecast] = useState(null);
   useEffect(() => {
    setReady(false);
   }, [props]);

   function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
   }

   function load(){
    let apiKey ="d8e366c15b60dabbe9f54b799921805a";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=-${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   }
   
    if (ready) {
        return(
    <div className="row forecast">
        {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
                return (
                <div className="col" key={index}>
                    <ForecastDay data={dailyForecast}/>
                </div>  
                );
            } else {
                return null;
            }
        })}   
    </div>
        );
    } else {
   load();
    return null;

    }
  
}