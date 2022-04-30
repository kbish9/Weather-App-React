import React from "react";

export default function ForecastDay(props){
    function temp () {
    let temp = Math.round(props.data.temp.day);
return `${temp}°C`;
}

function day(){
    let date = new Date(props.data.dt*1000);
    let day = date.getDate();
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
{temp()} 
</div></div>
}