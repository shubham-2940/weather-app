import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Result({ weatherData }) {
  return (
    <div
      className="container mt-5 p-4 bg-transparent rounded shadow border"
      style={{ maxWidth: "600px" }}
    >
      {weatherData.name !== undefined ? (
        <>
          <h1 className="text-white text-center">
            {weatherData.name}{" "}
          </h1>
          <div className="d-flex align-items-center justify-content-around text-white mt-3">
            <div>Longitude : {weatherData.coord.lon}</div>
            <div>Latitude : {weatherData.coord.lat}</div>
          </div>

          <div className="d-flex align-items-center justify-content-around text-white mt-3">
            <div>Max Temp : {weatherData.main.temp_max} °C</div>
            <div>Min Temp : {weatherData.main.temp_min} °C </div>
          </div>

          <div className="d-flex align-items-center justify-content-around text-white mt-3">
            <div>Humidity : {weatherData.main.humidity} %</div>
            <div>Sea Level : {weatherData.main.sea_level}</div>
          </div>

          <div className="d-flex align-items-center justify-content-around text-white">
            <div>Weather Type : {weatherData.weather[0].description}</div>

            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <h4 className="text-white text-center">Enter city to check weather</h4>
        </>
      )}
    </div>
  );
}
