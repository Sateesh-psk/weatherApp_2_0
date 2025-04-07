// src/api/cityApi.js
import axios from "axios";

// Replace with your actual RapidAPI key
const GEO_API_KEY = import.meta.env.VITE_GEO_DB_API_KEY;
const GEO_API_HOST = "wft-geo-db.p.rapidapi.com";

const BASE_URL = `https://${GEO_API_HOST}/v1/geo/cities`;

export const fetchCitySuggestions = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        namePrefix: query,
        limit: 5,
        sort: '-population',
      },
      headers: {
        'X-RapidAPI-Key': GEO_API_KEY,
        'X-RapidAPI-Host': GEO_API_HOST,
      },
    });
    return response.data.data; // returns array of city objects
  } catch (error) {
    console.error("City suggestion error:", error);
    return [];
  }
};
