import React from 'react'
import "./index.css"
import SearchPage from './pages/SearchPage'
import WeatherPage from './pages/WeatherPage'
import useWeatherStore from './store/weatherStore'
import Footer from './components/Footer'

const App = () => {
  const { weather, loading } = useWeatherStore();
  return (
    <div className=' py-16 px-16 max-lg:px-6 text-white min-h-screen bg-gradient-to-r from-primary1 to-primary2'>
      <SearchPage />
      {weather && !loading && (
        <WeatherPage />
      )}
      <Footer />
    </div>
  )
}

export default App