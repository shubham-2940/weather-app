import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "./assets/sunset-clouds.jpg"; 

import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  // const getWeatherData = () => {

  // }

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeatherHandler = () => {
    if (search !== "") {
      const apiKey = "b6d609530228c8a726ee3c129cab5f98";
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setWeather(data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  };

  return (
    <div className="container-fluid p-3"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
    }}>

      <div className="text-center mt-5">
        <span className="bg-danger text-white py-2 px-3 rounded" style={{ fontSize: '22px', width: '200px', height: '50px', display: 'inline-block' }}>
          Weather App
        </span>
      </div>

      <div className="d-flex justify-content-center mt-4">
      <Search
        searchData={search}
        eventHandler={changeSearch}
        searchWeather={searchWeatherHandler}
      />
      </div>

      <div className="mt-4">
      <Result weatherData={weather} />
      </div>
    </div>
  );
}

export default App;
