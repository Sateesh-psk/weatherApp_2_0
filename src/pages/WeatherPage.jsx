import React from 'react'
import CityPlace from '../components/CityPlace'
import CurrentWeather from '../components/CurrentWeather'
import AdditionalWeatherDetails from '../components/AdditionalWeatherDetails'
import HourlyForecast from '../components/HourlyForecast'
import AstroDetails from '../components/AstroDetails'

const WeatherPage = () => {
  return (
    <div>
      <CityPlace />
      <CurrentWeather />
      <AdditionalWeatherDetails />
      <AstroDetails />
      <HourlyForecast />
    </div>
  )
}
 
export default WeatherPage