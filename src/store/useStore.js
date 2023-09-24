import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      weatherData: {},
      setWeatherData: (data) => set({ weatherData: data }),
      airPollutionData: {},
      setAirPollutionData: (data) => set({ airPollutionData: data }),
      forecastData: {},
      setForecastData: (data) => set({ forecastData: data }),
      alertData: [],
      setAlertData: (data) => set({ alertData: data }),
      userLocation: {
        latitude: 0,
        longitude: 0,
      },
      setUserLocation: (latitude, longitude) =>
        set({
          userLocation: {
            latitude,
            longitude,
          },
        }),
      userCity: "Bhubaneswar",
      setUserCity: (city) => set({ userCity: city }),
      isError: false,
      setError: (error) =>
        set({
          isError: error,
        }),
      isDarkMode: false,
      setDarkMode: (value) =>
        set({
          isDarkMode: value,
        }),
    }),
    {
      name: "app-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
