import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import apiUtils from "../../API/apiUtils";
import useStore from "../../store/useStore";

const Searchbox = () => {
  const {
    setWeatherData,
    setAirPollutionData,
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

    // await fetchForcastData(latitude, longitude).then((data) => {
    //   setForecastData(data);
    // });

    await fetchOneCallData(latitude, longitude).then((data) => {
      setForecastData(data?.daily);
    });
  };

  useEffect(() => {
    if (!!userLocation.latitude) {
      fetchWeatherDataHandler(userLocation.latitude, userLocation.longitude);
    } else {
      fetchWeatherDataHandler();
    }
  }, [userLocation]);

  return (
    <div className="flex flex-col items-center md:items-end">
      <div className="flex items-center bg-white rounded-full pl-2 pr-1 py-1 shadow focus:outline outline-offset-4 outline-2 outline-blue-300">
        <IconSearch className="text-blue-200" />
        <input
          type="text"
          className="font-semibold text-xl rounded-full focus:outline-none pl-3 caret-blue-400 text-blue-500"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          className="bg-blue-400 text-white p-2 rounded-full shadow active:scale-90 transition ease-in-out duration-300"
          onClick={() => fetchWeatherDataHandler()}
        >
          Search
        </button>
      </div>
      <div className="text-sm text-neutral-600 pr-2 py-2">
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
