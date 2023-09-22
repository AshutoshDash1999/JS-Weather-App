import {
    IconCloud,
    IconDroplet,
    IconMapPin,
    IconMoon,
    IconSunHigh,
    IconTemperatureCelsius,
    IconWind,
    IconWorldLatitude,
    IconWorldLongitude
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import { showWeatherIcon } from "../../utils/utils";
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const Weather = () => {
  const { weatherData } = useStore();
  const [sunsetTime, setSunsetTime] = useState("");
  const [sunriseTime, setSunriseTime] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const link = document.querySelector('link[rel="icon"]');

  useEffect(() => {
    setSunriseTime(
      dayjs.unix(weatherData?.sys?.sunrise).local().format("hh:mm A")
    );
    setSunsetTime(
      dayjs.unix(weatherData?.sys?.sunset).local().format("hh:mm A")
    );

    if (!!weatherData?.weather) {
      const icon = showWeatherIcon(
        weatherData?.weather[0].main,
      );
      link.setAttribute('href', icon);
      setWeatherIcon(icon);
    }
  }, [
    weatherData?.sys?.sunrise,
    weatherData?.sys?.sunset,
    weatherData?.weather,
    weatherData?.dt
  ]);

  return (
    <>
      <section className="md:bg-white md:p-4 md:px-8 rounded-xl my-2 dark:bg-indigo-900">
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl shadow-md p-4 text-white my-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center">
              <IconMapPin stroke={1.5} /> {weatherData?.name}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <IconWorldLatitude stroke={1.5} /> {weatherData?.coord?.lat}
              </div>
              <div className="flex items-center">
                <IconWorldLongitude stroke={1.5} /> {weatherData?.coord?.lon}
              </div>
            </div>
          </div>

          <div className="flex justify-center p-2">
            <img
              src={weatherIcon}
              alt="weather icon"
              height={100}
              width={100}
            />
          </div>

          <h2 className="text-7xl text-center font-bold flex justify-center items-start mb-1">
            {weatherData?.main?.temp} <IconTemperatureCelsius size={70} />
          </h2>

          {!!weatherData?.weather ? (
            <p className="text-center py-2">
              {weatherData?.weather[0].description}
            </p>
          ) : null}

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-center">
              <span className="flex w-24 gap-1 item-center">
                <IconWind stroke={1.5} /> Wind
              </span>
              <span className="w-5 text-center">|</span>
              <span className="w-24">{weatherData?.wind?.speed} m/s</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="flex w-24 gap-1 item-center">
                <IconDroplet stroke={1.5} size={20} /> Humidity
              </span>
              <span className="w-5 text-center">|</span>
              <span className="w-24">{weatherData?.main?.humidity} %</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="flex w-24 gap-1 item-center">
                <IconCloud stroke={1.5} size={20} /> Cloud
              </span>
              <span className="w-5 text-center">|</span>
              <span className="w-24">{weatherData?.clouds?.all} %</span>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-blue-950  rounded-xl p-4 my-4 text-black flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <IconSunHigh className="text-orange-400" size={60} stroke={1.5} />
            </div>
            <div className="flex flex-col ">
              <span className="text-neutral-400 dark:text-neutral-200">Sunrise</span>
              <span className="text-blue-400 font-bold text-xl">
                {sunriseTime}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <IconMoon className="text-orange-400" size={60} stroke={1.5} />
            </div>
            <div className="flex flex-col ">
              <span className="text-neutral-400 dark:text-neutral-200">Sunset</span>
              <span className="text-blue-400 font-bold text-xl">
                {sunsetTime}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Weather;
