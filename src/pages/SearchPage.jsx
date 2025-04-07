import React, { useEffect, useRef, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import useWeatherStore from '../store/weatherStore'
import SearchInput from '../components/SearchInput'
import SuggestionsList from '../components/SuggestionsList'
import useCitySuggestions from '../hooks/UseCitySuggestions'

const SearchPage = () => {
  const {
    city,
    setCity,
    fetchWeatherData,
    weather,
    loading,
    error,
    lastFetchedCity
  } = useWeatherStore();

  const inputRef = useRef(null); // Input focus ref
  const suggestions = useCitySuggestions(city);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleSearch = () => {
    if (city === '') toast.error('Enter a city name', { duration: 1000 });
    else if (weather && city.toLowerCase() === lastFetchedCity.toLowerCase())
      toast.error('Enter new city name', { duration: 1200 });
    else fetchWeatherData();
  };

  useEffect(() => setFocusedIndex(-1), [suggestions]);

  useEffect(() => {
    if (loading) toast.loading('Fetching...');
  }, [loading]);

  useEffect(() => {
    if (weather) {
      toast.dismiss();
      toast.success('scroll down for details', { duration: 1100 });
    }
  }, [weather]);

  useEffect(() => {
    toast.dismiss();
    if (error) toast.error(error, { duration: 1500 });
  }, [error]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (focusedIndex >= 0 && suggestions.length > 0) {
        const selected = suggestions[focusedIndex];
        setCity(`${selected.name},${selected.country}`);
        setFocusedIndex(-1);
        inputRef.current?.focus(); // Focus input
      } else {
        handleSearch();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (suggestions.length > 0)
        setFocusedIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (suggestions.length > 0)
        setFocusedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    }
  };

  const handleSuggestionSelect = (item) => {
    setCity(`${item.name},${item.country}`);
    inputRef.current?.focus(); // Focus input after selecting
  };

  return (
    <div className="h-[75vh] flex">
      <div className="flex flex-col w-full items-center justify-center">
        <SearchInput
          ref={inputRef}
          city={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          onSearch={handleSearch}
        />
        <div className="select-none w-1/2 max-lg:w-2/3 max-md:w-full">
          {suggestions.length > 0 && (
            <SuggestionsList
              suggestions={suggestions}
              onSelect={handleSuggestionSelect}
              focusedIndex={focusedIndex}
            />
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SearchPage;
