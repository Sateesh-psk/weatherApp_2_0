import { create } from "zustand";
import axios from "axios";

const useWeatherStore = create((set, get) => ({
  city: "", // Default city
  weather: null,
  loading: false,
  error: null,
  lastFetchedCity: null, // Store last fetched city for caching
  activeTab: "tab1",

  setCity: (newCity) => set({ city: newCity }),
  setActiveTab: (newTab) => set({ activeTab: newTab}),

  fetchWeatherData: async () => {
    const { city, lastFetchedCity } = get();
    if (city === lastFetchedCity) return;

    set({ loading: true, error: null });

    try {
      const API_KEY = "YOUR_OPENWEATHER_API_KEY";
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_OPENWEATHER_API_KEY}&q=${city}&aqi=yes&alerts=no`

      );
      set({ weather: response.data, lastFetchedCity: city });
    } catch (err) {
      set({ error: "Failed to fetch weather. Try again." });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useWeatherStore;