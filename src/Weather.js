import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
const [city, setCity]= useState(props.city)
const [weatherData, setWeatherData] = useState({ ready: false });
function getWeather(response) {
    setWeatherData({
        ready: true,
        coord: response.data.coord,
        date: new Date(response.data.dt*1000),
        Temp: response.data.main.temp,
        Wind: response.data.wind.speed,
        city: response.data.name,
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        Description: response.data.weather[0].description,
    });
}

function search() {
     const apiKey = "d8e366c15b60dabbe9f54b799921805a";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(getWeather);
}

function handleSubmit(event) {
event.preventDefault();
search();
}

function handleCityChange(event){
setCity(event.target.value);
}

if(weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row search">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <Forecast coord={weatherData.coord}/>
      </div>
    );
} else {
search();
return "Loading...";
}
}
