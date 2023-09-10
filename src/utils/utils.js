export const showWeatherIcon = (weatherMain, weatherDescription) => {
  const dayType =
    new Date().getHours() > 5 && new Date().getHours() < 18 ? "day" : "night";

  switch (weatherMain) {
    case "Clear":
      return;
    case "Haze" ||
      "Mist" ||
      "Tornado" ||
      "Squall" ||
      "Ash" ||
      "Dust" ||
      "Sand" ||
      "Fog" ||
      "Dust" ||
      "Smoke" ||
      "Mist":
      return `/assets/weather-icons/atmosphere/${dayType}.png`;
    case "Snow":
      return `/assets/weather-icons/snow/snow.png`;
    case "Drizzle":
      return `/assets/weather-icons/drizzle/${dayType}.png`;
    case "Rain":
      return `/assets/weather-icons/rain/${dayType}.png`;
    case "Thunderstorm":
      return `/assets/weather-icons/thunderstorm/thunderstorm.png`;
    case "Clouds":
      return `/assets/weather-icons/clouds/clouds.png`;

    default:
      break;
  }
};
