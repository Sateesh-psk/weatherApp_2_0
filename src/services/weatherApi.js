import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?key="+API_KEY;

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        alerts:"no",
        aqi:"yes"
      },
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Weather data could not be retrieved.");
  }
};
