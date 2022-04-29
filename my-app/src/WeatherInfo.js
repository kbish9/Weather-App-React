import React from "react";
import FormattedDate from "./FormattedDate";
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
          <h4>{props.data.Icon}</h4>
        </div>
        <div className="info">
          <h2>{Math.round(props.data.Temp)} °C|F</h2>
          <h6>Current Temp</h6>
          <h4 className="text-capitalize">{props.data.Description}</h4>
          <h4>{Math.round(props.data.Wind)}</h4>
        </div>
      </div>
    </div>);
}