import { useEffect } from "react";
import "./App.css";
import {
    AirPollution,
    DateTime,
    Forecast,
    SearchBox,
    Weather
} from "./components";
import useStore from "./store/useStore";
import { getUserCoordinates } from "./utils/utils";

function App() {
  const { setUserLocation, weatherData, airPollutionData, forecastData } =
    useStore();

  useEffect(() => {
    if (navigator.geolocation) {
      getUserCoordinates(setUserLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="h-screen bg-blue-50 p-8 md:p-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <DateTime />
        <SearchBox />
      </div>

      {weatherData?.name && airPollutionData?.list && forecastData?.length ? (
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <Weather />
          <div>
            <AirPollution />
            <Forecast />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-12">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

export default App;
