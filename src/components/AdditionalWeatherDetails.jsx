import React from 'react'
import useWeatherStore from '../store/weatherStore'
import AdditionalDetailsCard from './AdditionalDetailsCard';

const AdditionalWeatherDetails = () => {
  const { weather } = useWeatherStore();
  return (
    <div className=' min-lg:h-[75vh] max-sm:h-[130vh] max-lg:h-[100vh] flex items-center'>
      <div className=' w-full select-none grid min-lg:grid-cols-4 max-sm:grid-cols-1 max-lg:gap-y-10 max-lg:grid-cols-2 gap-y-6 grp-3 text-center '>
        <AdditionalDetailsCard
        primary={weather.current.wind_kph}
        units="km/h"
        secondary="wind speed"
        />
        <AdditionalDetailsCard
        primary={weather.current.humidity}
        units=""
        secondary="humidity"
        />
        <AdditionalDetailsCard
        primary={parseInt(weather.current.feelslike_c)}
        units="°C"
        secondary="feels like"
        />
        <AdditionalDetailsCard
        primary={weather.current.uv}
        units=""
        secondary="uv index"
        />
      </div>
    </div>
  )
}

export default AdditionalWeatherDetails