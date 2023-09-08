import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import apiUtils from "../../API/apiUtils";
import useStore from "../../store/useStore";

const Searchbox = () => {
  const { setWeatherData, setAirPollutionData, setForecastData } = useStore();

  const [cityName, setCityName] = useState("Bhubaneswar");

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

  useEffect(() => {
    fetchWeatherDataHandler();
  }, []);

  return (
    <div>
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
          onClick={fetchWeatherDataHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Searchbox;
