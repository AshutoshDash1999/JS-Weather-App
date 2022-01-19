import React, {useState} from "react";
import './App.css';

function App() {
    const [cityName, setCityName] = useState("");
    const [cityWeather, setCityWeather] = useState("--")
    const [cityTemp, setCityTemp] = useState("--")
    const [cityWind, setCityWind] = useState("--")
    const [cityHumidity, setCityHumidity] = useState("--")
    const [weatherIcon, setWeatherIcon] = useState("");

        // function to get weather icon
    // function getWeatherImg(weather){

    //     // clear sky
    //     if (weather == "clear sky"){
    //         setWeatherIcon("./icons/day/clear_sky.png")
    //     }

    //     // few clouds
    //     if (weather == "few clouds" || weather == "scattered clouds"){
    //         setWeatherIcon("./icons/day/few_clouds.png")
    //     }

    //     // heavy cloud
    //     if (weather == "broken clouds" || weather == "overcast clouds"){
    //         setWeatherIcon("./icons/clouds.png")
    //     }

    //     // clouds and rain
    //     if (weather == "shower rain" || weather == "light intensity shower rain"){
    //         return "./icons/shower_rain.png"
    //     }

    //     // rain
    //     if (weather == "rain" || weather == "light rain" || weather == "moderate rain"){
    //         return "./icons/day/rain.png"
    //     }

    //     // heavy rain
    //     if ( weather == "heavy intensity rain" || weather == "very heavy rain" || weather == "extreme rain" || weather == "heavy intensity shower rain" || weather == "ragged shower rain"){
    //         return ".icons/heavy_rain.png";
    //     }

    //     // rain and snow
    //     if (weather == "freezing rain" || weather == "Light rain and snow" || weather == "Rain and snow"){
    //         return "./icons/freezing_rain.png";
    //     }

    //     // thunderstorm
    //     if (weather == "thunderstorm" || weather == "thunderstorm with light rain" || weather == "thunderstorm with rain" || weather == "thunderstorm with heavy rain" || weather == "light thunderstorm" || weather == "heavy thunderstorm" || weather == "ragged thunderstorm" || weather == "thunderstorm with drizzle" || weather == "thunderstorm with light drizzle" || weather == "thunderstorm with heavy drizzle"){
    //         return "./icons/thunderstorm.png"
    //     }

    //     // snow
    //     if (weather == "snow" || weather == "light snow	" || weather == "Heavy snow	" || weather == "Sleet" || weather == "Light shower sleet" || weather == "Shower sleet" || weather == "Light shower snow" || weather == "Shower snow" || weather == "Heavy shower snow"){
    //         return "./icons/snow.png"
    //     }

    //     // atmosphere
    //     if (weather == "mist" || weather == "smoke" || weather == "haze" || weather == "sand/ dust whirls" || weather == "fog" || weather == "sand" || weather == "sand" || weather == "dust" || weather == "volcanic ash" || weather == "squalls" || weather == "tornado"){
    //         return "./icons/day/mist.png"
    //     }
    // }

    function getWeatherAPI(cityName){
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=4e062582c656f02ba35daa9bc4d33cdb`;
        fetch(apiURL)
        .then(response => response.json())
        .then((data)=> {
            setCityName("");
            setCityWeather(data.weather[0].description);
            // let weather = data.weather[0].description;
            // getWeatherImg(data.weather[0].description)
            setCityTemp(`${data.main.temp}°C`);
            setCityWind(`${data.wind.speed} m/s`);
            setCityHumidity(`${data.main.humidity}%`);
            // weatherImg.innerHTML = `<img src=${getWeatherImg(weather)} id="weather-icon" width="250" height="300" alt="">`;
        })
        .catch((e) => {
            setCityName("Something went wrong! Please write correct city name or check your internet.")
            setCityWeather("--");
            setCityTemp("--");
            setCityWind("--");
            setCityHumidity("--");
            console.log("Error: ",e);
        })
    }

    function userInputHandler(e){
        if (e.target.value == ''){
            setCityName("");
            setCityWeather("--");
            setCityTemp("--");
            setCityWind("--");
            setCityHumidity("--");
        } else{
            getWeatherAPI(e.target.value);
        }
    }

  return (
    <div className="App">
      <section className="container p-8 text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold p-2 m-2">Open Weather</h1>
        <p>
            <input className="border-b-4 border-b-blue-900 rounded-lg p-2 text-xl focus:outline-none" type="text" name="" placeholder="Search city name here..." id="city-name" onChange={userInputHandler}/>

            {/* <button className="border-2 border-teal-800 rounded-lg p-2 m-2 text-xl text-center transition ease-in-out delay-150 active:scale-95 bg-gradient-to-r from-emerald-500 to-teal-500 drop-shadow-md hover:drop-shadow-2xl" id="findBtn">Search</button> */}
        </p>

        <p className="font-bold bg-yellow-300 text-red-600 rounded-md m-2">{cityName}</p>

        <div className="weather-img p-2 m-2 backdrop-blur-md text-center rounded-xl">
            {/* <!-- weather icon here --> */}
        </div>
        
            <section className="result-container p-4 m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
                <div className="weather border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
                    <p>Weather:</p>
                    <p className="font-bold resultText" id="weather-description">{cityWeather}</p>
                </div>
                <div className="temp border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
                    <p>Temperature:</p>
                    <p className="font-bold resultText" id="temp">{cityTemp}</p>
                </div>
                <div className="windSpeed border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
                    <p>Wind Speed:</p>
                    <p className="font-bold resultText" id="wind-speed">{cityWind}</p>
                </div>
                <div className="humidity border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
                    <p>Humidity:</p>
                    <p className="font-bold resultText" id="humidity">{cityHumidity}</p>
                </div>
            </section>
        </section>
    </div>
  );
}

export default App;
