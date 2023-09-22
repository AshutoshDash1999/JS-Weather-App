import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import apiUtils from "../../API/apiUtils";
import useStore from "../../store/useStore";
import DarkmodeToggler from "../DarkmodeToggler/DarkmodeToggler";

const Searchbox = () => {
  const {
    setWeatherData,
    setAirPollutionData,
    setAlertData,
    setForecastData,
    userLocation,
    setUserCity,
    userCity,
  } = useStore();

  const [cityName, setCityName] = useState(userCity);

  const {
    fetchWeatherDataByCity,
    fetchWeatherDataByCoordinates,
    fetchAirPollutionData,
    fetchOneCallData,
  } = apiUtils;

  const fetchWeatherDataHandler = async (latitude = "", longitude = "") => {
    setWeatherData({});
    if (!!latitude) {
      await fetchWeatherDataByCoordinates(latitude, longitude).then((data) => {
        setWeatherData(data);
        setUserCity(data?.name);
        setCityName(data?.name);

        return data;
      });
    } else {
      await fetchWeatherDataByCity(cityName).then((data) => {
        setWeatherData(data);
        setUserCity(data?.name);
        setCityName(data?.name);
        latitude = data?.coord?.lat;
        longitude = data?.coord?.lon;
        return data;
      });
    }

    await fetchAirPollutionData(latitude, longitude).then((data) => {
      setAirPollutionData(data);
    });

    await fetchOneCallData(latitude, longitude).then((data) => {
      setForecastData(data?.daily);
      setAlertData(data?.alerts);
    });
  };

  useEffect(() => {
    if (
      !!localStorage.getItem("latitude") &&
      !!localStorage.getItem("longitude")
    ) {
      fetchWeatherDataHandler(
        localStorage.getItem("latitude"),
        localStorage.getItem("longitude")
      );
    } else if (!!userLocation.latitude && !!userLocation.longitude) {
      fetchWeatherDataHandler(userLocation.latitude, userLocation.longitude);
    } else {
      fetchWeatherDataHandler();
    }
  }, [userLocation]);

  //it triggers by pressing the enter key
  const fetchWeatherOnKeypress = (e) => {
    if (e.keyCode === 13) {
      fetchWeatherDataHandler();
    }
  };

  return (
    <div className="flex flex-col items-center md:items-end gap-3">
      <DarkmodeToggler />

      <div className="flex items-center bg-white rounded-full pl-2 pr-1 py-1 shadow focus:outline outline-offset-4 outline-2 outline-blue-300">
        <IconSearch className="text-blue-200" />
        <input
          type="text"
          className="font-semibold text-xl rounded-full focus:outline-none pl-3 caret-blue-400 text-blue-500"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          onKeyDown={fetchWeatherOnKeypress}
        />
        <button
          className="bg-blue-400 dark:bg-blue-900 text-white p-2 rounded-full shadow active:scale-90 transition ease-in-out duration-300"
          onClick={() => fetchWeatherDataHandler()}
        >
          Search
        </button>
      </div>
      <div className="text-sm text-neutral-600 pr-2 dark:text-white">
        Made by{" "}
        <a
          href="https://ashutoshdash.netlify.app/"
          className="text-purple-600 font-bold"
        >
          Ashutosh Dash
        </a>
      </div>
    </div>
  );
};
export default Searchbox;
