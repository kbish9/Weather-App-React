import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState(ready, false);
function getWeather(response) {
    setWeatherData({
        ready: true,
        date: new Date(response.data.dt*1000),
        Temp: response.data.main.temp,
        Wind: response.data.wind.speed,
        City: response.data.name,
        Icon: "to follow",
        Description: response.data.weather[0].description,
    });
    setReady(true);
}

if(weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row search">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn" />
            </div>
          </div>
        </form>
        <div className="container-weather">
          <div className="info">
            <h1>{weatherData.City}</h1>
            <h4>
                <FormattedDate date={weatherData.date} />
            </h4>
            <h4>{weatherData.Icon}</h4>
          </div>
          <div className="info">
            <h2>{Math.round(weatherData.Temp)} °C|F</h2>
            <h6>Current Temp</h6>
            <h4 className="text-capitalize">{weatherData.Description}</h4>
            <h4>{Math.round(weatherData.Wind)}</h4>
          </div>
        </div>
      </div>
    );
} else {
     const apiKey = "d8e366c15b60dabbe9f54b799921805a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(getWeather);
}

   


}
