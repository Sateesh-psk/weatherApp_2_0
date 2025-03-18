import React from 'react'
import useWeatherStore from '../store/weatherStore'

const CurrentWeather = () => {
  const { weather } = useWeatherStore();

  return (
    <div className=' my-96 min-sm:grid min-sm:grid-cols-12 min-sm:gap-4 select-none'>
      <div className={`animate-fade-in min-md:col-span-3 min-md:col-start-1
       min-sm:text-right min-sm:text-9xl min-sm:col-span-4 min-sm:col-start-2
       max-sm:justify-self-center max-sm:text-8xl`}
      >
        {parseInt(weather.current.temp_c)}<span className='text-3xl text-secondary2'>°C</span>
      </div>
      <div className=' animate-appear max-sm:mt-10 max-sm:justify-self-center min-sm:col-span-6'>
        <img
         className='w-21 max-sm:justify-self-center'
         src={weather.current.condition.icon}
        />
        <h1 className=' max-sm:text-3xl min-sm:text-4xl tracking-wider text-secondary1'>{weather.current.condition.text}</h1>
      </div>
    </div>
  )
}

export default CurrentWeather