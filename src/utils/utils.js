import useStore from "../store/useStore";

const { setUserLocation } = useStore.getState();

export const showWeatherIcon = (weatherMain) => {
  const dayType =
    new Date().getHours() > 5 && new Date().getHours() < 18 ? "day" : "night";

  switch (weatherMain) {
    case "Clear":
      return `/assets/weather-icons/clear-sky/${dayType}.webp`;
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
      return `/assets/weather-icons/snow/snow.webp`;
    case "Drizzle":
      return `/assets/weather-icons/drizzle/${dayType}.webp`;
    case "Rain":
      return `/assets/weather-icons/rain/${dayType}.webp`;
    case "Thunderstorm":
      return `/assets/weather-icons/thunderstorm/thunderstorm.webp`;
    case "Clouds":
      return `/assets/weather-icons/clouds/clouds.webp`;

    default:
      return `/assets/weather-icons/atmosphere/${dayType}.webp`;
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

  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted" || "prompt") {
      //If granted then you can directly call your function here
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!!position.coords) {
            setUserLocation(
              position.coords.latitude,
              position.coords.longitude
            );
            localStorage.setItem("latitude", position.coords.latitude);
            localStorage.setItem("longitude", position.coords.longitude);
          } else {
            setUserLocation(
              localStorage.getItem("latitude"),
              localStorage.getItem("longitude")
            );
          }

          console.table("User coordinates:", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        },
        options
      );
    } else if (result.state === "denied") {
      //If denied then you have to show instructions to enable location
    }
  });
};

export const checkSO2Concentration = (so2Value) => {
  if (so2Value < 0) {
    return "Invalid Value";
  } else if (so2Value < 20) {
    return "Good";
  } else if (so2Value < 80) {
    return "Fair";
  } else if (so2Value < 250) {
    return "Moderate";
  } else if (so2Value < 350) {
    return "Poor";
  } else {
    return "Very Poor";
  }
};

export const checkNO2Concentration = (no2Value) => {
  if (no2Value < 0) {
    return "Invalid Value";
  } else if (no2Value < 20) {
    return "Good";
  } else if (no2Value < 70) {
    return "Fair";
  } else if (no2Value < 150) {
    return "Moderate";
  } else if (no2Value < 200) {
    return "Poor";
  } else {
    return "Very Poor";
  }
};

export const checkPM10Concentration = (pm10Value) => {
  if (pm10Value < 0) {
    return "Invalid Value";
  } else if (pm10Value < 20) {
    return "Good";
  } else if (pm10Value < 50) {
    return "Fair";
  } else if (pm10Value < 100) {
    return "Moderate";
  } else if (pm10Value < 200) {
    return "Poor";
  } else {
    return "Very Poor";
  }
};

export const checkPM2_5Concentration = (pm2_5Value) => {
  if (pm2_5Value < 0) {
    return "Invalid Value";
  } else if (pm2_5Value < 20) {
    return "Good";
  } else if (pm2_5Value < 50) {
    return "Fair";
  } else if (pm2_5Value < 100) {
    return "Moderate";
  } else if (pm2_5Value < 200) {
    return "Poor";
  } else {
    return "Very Poor";
  }
};

export const checkO3Concentration = (o3Value) => {
  if (o3Value < 0) {
    return "Invalid Value";
  } else if (o3Value < 10) {
    return "Good";
  } else if (o3Value < 25) {
    return "Fair";
  } else if (o3Value < 50) {
    return "Moderate";
  } else if (o3Value < 75) {
    return "Poor";
  } else {
    return "Very Poor";
  }
};

export const checkCOConcentration = (coValue) => {
  if (coValue < 0) {
    return "Invalid Value";
  } else if (coValue < 60) {
    return "Good";
  } else if (coValue < 100) {
    return "Fair";
  } else if (coValue < 140) {
    return "Moderate";
  } else if (coValue < 180) {
    return "Poor";
  } else {
    return "Very Poor";
  }
};

export const getColorClasses = (qualitativeName) => {
  const colorClasses = {
    Good: {
      textColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    Fair: {
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    Moderate: {
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    Poor: {
      textColor: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    "Very Poor": {
      textColor: "text-red-600",
      bgColor: "bg-red-100",
    },
    "Invalid Value": {
      textColor: "text-gray-600",
      bgColor: "bg-gray-100",
    },
  };

  return colorClasses[qualitativeName] || colorClasses["Invalid Value"];
};
