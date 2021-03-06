import React from "react";
import "./Weather.css";

export default function ForecastDay(props){
    function temp () {
    let temp = Math.round(props.data.temp.day);
return `${temp}°`;
}

function day(){
    let date = new Date(props.data.dt*1000);
    let day = date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ]; 

    return days[day];
}

return <div>
<div className="forecast-day">
{day()} 
</div>
<div className="expected text-muted">
Expected Temperature
</div>
<div className="forecast-temp">
{temp()}<span className="forecast-unit">C</span>
</div></div>
}