// input 
let findBtn = document.querySelector("#findBtn");
let city = document.querySelector("#city-name");

// output
let weatherDescription = document.querySelector("#weather-description");
let temp = document.querySelector("#temp")
let windSpeed = document.querySelector("#wind-speed");
let humidity = document.querySelector("#humidity");
let weatherImg = document.querySelector(".weather-img");

// function to get weather icon
function getWeatherImg(weather){

    // clear sky
    if (weather == "clear sky"){
        return "./icons/day/clear_sky.png"
    }

    // few clouds
    if (weather == "few clouds" || weather == "scattered clouds"){
        return "./icons/day/few_clouds.png"
    }

    // heavy cloud
    if (weather == "broken clouds" || weather == "overcast clouds"){
        return "./icons/clouds.png"
    }

    // clouds and rain
    if (weather == "shower rain" || weather == "light intensity shower rain"){
        return "./icons/shower_rain.png"
    }

    // rain
    if (weather == "rain" || weather == "light rain" || weather == "moderate rain"){
        return "./icons/day/rain.png"
    }

    // heavy rain
    if ( weather == "heavy intensity rain" || weather == "very heavy rain" || weather == "extreme rain" || weather == "heavy intensity shower rain" || weather == "ragged shower rain"){
        return ".icons/heavy_rain.png";
    }

    // rain and snow
    if (weather == "freezing rain" || weather == "Light rain and snow" || weather == "Rain and snow"){
        return "./icons/freezing_rain.png";
    }

    // thunderstorm
    if (weather == "thunderstorm" || weather == "thunderstorm with light rain" || weather == "thunderstorm with rain" || weather == "thunderstorm with heavy rain" || weather == "light thunderstorm" || weather == "heavy thunderstorm" || weather == "ragged thunderstorm" || weather == "thunderstorm with drizzle" || weather == "thunderstorm with light drizzle" || weather == "thunderstorm with heavy drizzle"){
        return "./icons/thunderstorm.png"
    }

    // snow
    if (weather == "snow" || weather == "light snow	" || weather == "Heavy snow	" || weather == "Sleet" || weather == "Light shower sleet" || weather == "Shower sleet" || weather == "Light shower snow" || weather == "Shower snow" || weather == "Heavy shower snow"){
        return "./icons/snow.png"
    }

    // atmosphere
    if (weather == "mist" || weather == "smoke" || weather == "haze" || weather == "sand/ dust whirls" || weather == "fog" || weather == "sand" || weather == "sand" || weather == "dust" || weather == "volcanic ash" || weather == "squalls" || weather == "tornado"){
        return "./icons/day/mist.png"
    }
}

// function to fetch API and add data in DOM
function getWeatherAPI(){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&APPID=4e062582c656f02ba35daa9bc4d33cdb`;
    fetch(apiURL)
    .then(response => response.json())
    .then((data)=> {
        weatherDescription.innerHTML = data.weather[0].description;
        let weather = data.weather[0].description;
        temp.innerHTML = `${data.main.temp}°C`;
        windSpeed.innerHTML = `${data.wind.speed} m/s`;
        humidity.innerHTML = `${data.main.humidity}%`
        weatherImg.innerHTML = `<img src=${getWeatherImg(weather)} id="weather-icon" width="250" height="300" alt="">`
 
    })
}

// button click handler
findBtn.addEventListener("click", getWeatherAPI);