import React from 'react'
import useWeatherStore from '../store/weatherStore'
import AstroDetailCard from './AstroDetailCard';

const AstroDetails = () => {
  const astroDetails = useWeatherStore().weather.forecast.forecastday[0].astro;
  return (
    <div className=' my-80 justify-items-center py-10 min-lg:grid min-lg:grid-cols-2'>
      <AstroDetailCard sun='1'
       rise = {astroDetails.sunrise}
       set = {astroDetails.sunset}
      />
      <AstroDetailCard sun='0'
       rise = {astroDetails.moonrise}
       set = {astroDetails.moonset}
      />
    </div>
  )
}

export default AstroDetails