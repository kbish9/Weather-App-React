import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row search">
          <div className="col-9">
              <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
          </div>
          <div className="col-3">
              <input type="submit" value="Search" className="btn"/>
          </div>
        </div>
      </form>
      <div className="container-weather">
        
           
          <div className="info">
            <h1>London</h1>
            <h4>Thursday 8pm</h4>
            <h4>
                Icon
                </h4>    
          </div>
          <div className="info">
            <h2>8 C|F</h2>
            <h6>
                Current Temp
            </h6>
            <h4>Sunny</h4>
            <h4>Wind: 8km/h</h4>
          </div>
        
      </div>
    </div>
  );
}
