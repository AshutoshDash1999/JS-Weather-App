import endPoints from "./endPoints";
import fetchData from "./fetchData";

const { weather, airPollution, forecast, onecall } = endPoints;

const apiUtils = {
  fetchWeatherData: (cityName) => {
    const data = fetchData(`${weather}?q=${cityName}`)
      .then((data) => data)
      .catch((error) => error);
    return data;
  },
  fetchAirPollutionData: (latitude, longitude) => {
    const data = fetchData(`${airPollution}?lat=${latitude}&lon=${longitude}`)
      .then((data) => data)
      .catch((error) => error);
    return data;
  },
  fetchForcastData: (latitude, longitude) => {
    const data = fetchData(
      `${forecast}?lat=${latitude}&lon=${longitude}&cnt=10&`
    )
      .then((data) => data)
      .catch((error) => error);
    return data;
  },
  fetchOneCallData: (latitude, longitude) => {
    const data = fetchData(
      `${onecall}?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly`
    )
      .then((data) => data)
      .catch((error) => error);
    return data;
  },
};

export default apiUtils;
