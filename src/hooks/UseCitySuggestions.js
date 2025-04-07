import { useEffect, useState } from 'react';
import { fetchCitySuggestions } from '../services/cityApi';

const useCitySuggestions = (city) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (city.length > 2) {
        fetchCitySuggestions(city).then(setSuggestions);
      } else {
        setSuggestions([]);
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [city]);

  return suggestions;
};

export default useCitySuggestions;
