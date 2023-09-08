import { create } from "zustand";

const useStore = create((set) => ({
  weatherData: {},
  setWeatherData: (data) => set({ weatherData: data }),
  airPollutionData: {},
  setAirPollutionData: (data) => set({ airPollutionData: data }),
  forecastData: {},
  setForecastData: (data) => set({ forecastData: data }),
}));

export default useStore;
