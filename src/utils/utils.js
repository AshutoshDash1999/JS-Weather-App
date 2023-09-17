import useStore from "../store/useStore";

const { setUserLocation } = useStore.getState();

export const showWeatherIcon = (weatherMain, weatherDescription) => {
  const dayType =
    new Date().getHours() > 5 && new Date().getHours() < 18 ? "day" : "night";

  switch (weatherMain) {
    case "Clear":
      return `/assets/weather-icons/clear-sky/${dayType}.png`;
    case "Haze" ||
      "Mist" ||
      "Tornado" ||
      "Squall" ||
      "Ash" ||
      "Dust" ||
      "Sand" ||
      "Fog" ||
      "Dust" ||
      "Smoke":
      return `/assets/weather-icons/atmosphere/${dayType}.webp`;
    case "Snow":
      return `/assets/weather-icons/snow/snow.png`;
    case "Drizzle":
      return `/assets/weather-icons/drizzle/${dayType}.webp`;
    case "Rain":
      return `/assets/weather-icons/rain/${dayType}.webp`;
    case "Thunderstorm":
      return `/assets/weather-icons/thunderstorm/thunderstorm.webp`;
    case "Clouds":
      return `/assets/weather-icons/clouds/clouds.webp`;

    default:
      return `/assets/weather-icons/atmosphere/${dayType}.png`;
  }
};

export const showAQIBasedMessage = (aqi) => {
  let aqiMessage = {
    title: "",
    message: "",
    titleColor: "",
  };

  switch (aqi) {
    case 1:
      aqiMessage.title = "Good";
      aqiMessage.message = "The air is clean and refreshing.";
      aqiMessage.titleColor = "text-green-500";
      break;
    case 2:
      aqiMessage.title = "Fair";
      aqiMessage.message = "Air quality is acceptable.";
      aqiMessage.titleColor = "text-lime-500";
      break;
    case 3:
      aqiMessage.title = "Moderate";
      aqiMessage.message =
        "Air quality is unhealthy for people with respiratory problems.";
      aqiMessage.titleColor = "text-yellow-500";
      break;
    case 4:
      aqiMessage.title = "Poor";
      aqiMessage.message = "Air quality is unhealthy for everyone.";
      aqiMessage.titleColor = "text-orange-500";
      break;
    case 5:
      aqiMessage.title = "Very Poor";
      aqiMessage.message = "Air quality is very unhealthy.";
      aqiMessage.titleColor = "text-red-500";
      break;
    default:
      break;
  }

  return aqiMessage;
};

export const getUserCoordinates = () => {
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  navigator.permissions.query({ name: "geolocation" }).then(function (result) {
    if (result.state === "granted" || "prompt") {
      //If granted then you can directly call your function here
      let userPosition = navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords.latitude, position.coords.longitude);
          return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        },
        (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        },
        options
      );

      console.log("userPosition", userPosition);
    } else if (result.state === "denied") {
      //If denied then you have to show instructions to enable location
    }
  });
};
