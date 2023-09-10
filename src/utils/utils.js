export const showWeatherIcon = (weatherMain, weatherDescription) => {
  const dayType =
    new Date().getHours() > 5 && new Date().getHours() < 18 ? "day" : "night";

  switch (weatherMain) {
    case "Clear":
      return;
    case "Haze":
      return `/assets/weather-icons/atmosphere/${dayType}.png`;

    default:
      break;
  }
};
