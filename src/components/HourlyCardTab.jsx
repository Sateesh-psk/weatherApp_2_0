import React from 'react'
import useWeatherStore from '../store/weatherStore'

const HourlyCardTab = (props) => {
  const { activeTab, setActiveTab} = useWeatherStore();
  // console.log(props.tabs)
  return (
    <div className=" animate-slide-in-left w-full max-w-xl mx-auto ">
      <div className="min-sm:flex max-sm:grid max-sm:grid-cols-2">
        {props.tabs.map((tab) => (
          <button
            key={tab.id}
            className={` select-none text-lg max-sm:tracking-wide min-sm:tracking-wider cursor-pointer flex-1 py-2 min-sm:px-4 max-sm:px-2 text-center border-b-2 transition-all duration-300
              ${ activeTab === tab.id
                  ? "border-white text-white font-semibold"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default HourlyCardTab