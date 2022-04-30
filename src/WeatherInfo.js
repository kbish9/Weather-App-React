import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import "./Weather.css";


export default function WeatherInfo(props){
    return (
    <div>
      <div className="container-weather">
        <div className="info">
          <h1>{props.data.city}</h1>
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
          <h4>{props.data.iconUrl}</h4>
        </div>
        <div className="info">
            <WeatherTemp celsius={props.data.Temp} />
          <h6>Current Temp</h6>
          <h4 className="text-capitalize">{props.data.Description}</h4>
          <h4>Wind: {Math.round(props.data.Wind)}km/h</h4>
        </div>
      </div>
    </div>);
}