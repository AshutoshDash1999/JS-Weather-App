import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";
import apiUtils from "../../API/apiUtils";
import useStore from "../../store/useStore";

const Searchbox = () => {
  const {
    setWeatherData,
    setAirPollutionData,
    setForecastData,
    userLocation,
    setCityName,
    cityName,
  } = useStore();

  console.log("userLocation", userLocation);

  const {
    fetchWeatherDataByCity,
    fetchWeatherDataByCoordinates,
    fetchAirPollutionData,
    fetchForcastData,
    fetchOneCallData,
  } = apiUtils;

  const fetchWeatherDataHandler = async () => {
    let cityCoordinates = {
      latitude: 0,
      longitude: 0,
    };

    if (!!userLocation?.latitude) {
      await fetchWeatherDataByCoordinates(
        userLocation.latitude,
        userLocation.longitude
      ).then((data) => {
        setWeatherData(data);
        setCityName(data?.name);
        return data;
      });
    } else {
      await fetchWeatherDataByCity(cityName).then((data) => {
        setWeatherData(data);
        cityCoordinates.latitude = data.coord.lat;
        cityCoordinates.longitude = data.coord.lon;
        return data;
      });
    }

    const latitude = userLocation?.latitude
      ? userLocation?.latitude
      : cityCoordinates.latitude;
    const longitude = userLocation?.longitude
      ? userLocation?.longitude
      : cityCoordinates.longitude;

    await fetchAirPollutionData(latitude, longitude).then((data) => {
      setAirPollutionData(data);
    });

    await fetchForcastData(latitude, longitude).then((data) => {
      setForecastData(data);
    });

    await fetchOneCallData(latitude, longitude).then((data) => {
      //   console.log("one call", data);
    });
  };

  useEffect(() => {
    fetchWeatherDataHandler();
  }, [userLocation]);

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
