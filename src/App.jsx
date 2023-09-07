import React, { useState } from "react";
import apiUtils from "./API/apiUtils";
import "./App.css";
import { DateTime, SearchBox } from "./components";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [airPollutionData, setAirPollutionData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const { fetchWeatherData, fetchAirPollutionData, fetchForcastData } =
    apiUtils;

  const fetchWeatherDataHandler = async () => {
    const weatherDetails = await fetchWeatherData(cityName).then((data) => {
      setWeatherData(data);
      return data;
    });

    const latitude = weatherDetails?.coord?.lon;
    const longitude = weatherDetails?.coord?.lat;

    await fetchAirPollutionData(latitude, longitude).then((data) => {
      setAirPollutionData(data);
    });

    await fetchForcastData(latitude, longitude).then((data) => {
      setForecastData(data);
    });
  };

  console.log("weatherData", weatherData);
  console.log("airPollutionData", airPollutionData);
  console.log("forecastData", forecastData);

  return (
    <div className="h-screen bg-blue-50 p-8">
      <div className="flex items-center justify-between">
        <DateTime />
        <SearchBox />
      </div>
      <section className="container p-8 text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold p-2 m-2">Open Weather</h1>
        <div className="flex gap-4">
          <input
            className="ease-in-out duration-300 border-b-4 rounded-lg p-2 text-xl focus:outline-none focus:ring focus:border-green-500"
            type="text"
            name=""
            placeholder="Search city name here..."
            id="city-name"
            onChange={(e) => setCityName(e.target.value)}
          />
          <button
            className="ease-in-out duration-300 border-b-4 rounded-lg p-2 text-xl focus:outline-none active:border-yellow-500 bg-emerald-500 active:border-b-0"
            onClick={fetchWeatherDataHandler}
          >
            Search
          </button>
        </div>

        <div className="weather-img p-2 m-2 backdrop-blur-md text-center rounded-xl">
          {/* <!-- weather icon here --> */}
        </div>

        {!!weatherData ? (
          <section className="result-container p-4 m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
            <div className="weather border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
              <p>Weather:</p>
              <p className="font-bold resultText" id="weather-description">
                {/* {cityWeather} */}
              </p>
            </div>
            <div className="temp border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
              <p>Temperature:</p>
              <p className="font-bold resultText" id="temp">
                {/* {cityTemp} */}
              </p>
            </div>
            <div className="windSpeed border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
              <p>Wind Speed:</p>
              <p className="font-bold resultText" id="wind-speed">
                {/* {cityWind} */}
              </p>
            </div>
            <div className="humidity border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
              <p>Humidity:</p>
              <p className="font-bold resultText" id="humidity">
                {/* {cityHumidity} */}
              </p>
            </div>
          </section>
        ) : null}
      </section>
    </div>
  );
}

export default App;
