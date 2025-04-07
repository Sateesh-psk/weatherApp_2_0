import React from 'react'
import useWeatherStore from '../store/weatherStore';

const CityPlace = () => {
  const {weather} = useWeatherStore();
  return (
    <div className=' h-[75vh] flex items-center justify-center'>
      <div className=' w-full select-none min-lg:grid min-lg:grid-cols-2 gap-4'>
        <div className=' animate-scale-up max-lg:text-center min-lg:text-right'>
          <h1 className=' min-sm:text-8xl max-sm:text-5xl'>{weather.location.name}</h1>
        </div>
        <div className=' animate-scale-up max-lg:text-center min-lg:text-left max-lg:mt-3 min-lg:mt-5'>
          <h1 className=' min-sm:text-2xl max-sm:text-lg text-secondary1 tracking-wider'>{weather.location.region}</h1>
          <h1 className=' min-sm:text-4xl max-sm:text-xl text-secondary2 font-semibold tracking-wider'>{weather.location.country}</h1>
        </div>
      </div>
    </div>
  ) 
}

export default CityPlace