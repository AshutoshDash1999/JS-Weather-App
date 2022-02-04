import React, {useState} from "react";
import './App.css';

function App() {
    const [cityName, setCityName] = useState("");
    const [cityWeather, setCityWeather] = useState("--")
    const [cityTemp, setCityTemp] = useState("--")
    const [cityWind, setCityWind] = useState("--")
    const [cityHumidity, setCityHumidity] = useState("--")
    
    function getWeatherAPI(cityName){
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=4e062582c656f02ba35daa9bc4d33cdb`;
        fetch(apiURL)
        .then(response => response.json())
        .then((data)=> {
            setCityName("");
            setCityWeather(data.weather[0].description);
            setCityTemp(`${data.main.temp}°C`);
            setCityWind(`${data.wind.speed} m/s`);
            setCityHumidity(`${data.main.humidity}%`);

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
            <input className="ease-in-out duration-300 border-b-4 rounded-lg p-2 text-xl focus:outline-none focus:ring focus:border-green-500" type="text" name="" placeholder="Search city name here..." id="city-name" onChange={userInputHandler}/>

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
