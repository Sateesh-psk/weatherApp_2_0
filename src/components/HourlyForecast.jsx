import React, {useState} from 'react'
import useWeatherStore from '../store/weatherStore'
import HourCardChart from './HourCardChart';
import HourlyCardTab from './HourlyCardTab';

const HourlyForecast = () => {
  const {activeTab} = useWeatherStore();
  const  forecastData  = useWeatherStore().weather.forecast.forecastday[0];
  const minis = [
    Math.min(...forecastData.hour.map(hour => hour.temp_c)),
    Math.min(...forecastData.hour.map(hour => hour.feelslike_c)),
    Math.min(...forecastData.hour.map(hour => hour.humidity)),
    Math.min(...forecastData.hour.map(hour => hour.precip_mm)),
  ]
  const maxis = [
    Math.max(...forecastData.hour.map(hour => hour.temp_c)),
    Math.max(...forecastData.hour.map(hour => hour.feelslike_c)),
    Math.max(...forecastData.hour.map(hour => hour.humidity)),
    Math.max(...forecastData.hour.map(hour => hour.precip_mm)),
  ]

  const tabs = [
    { id: "tab1", label: "Temperature", num:0 },
    { id: "tab2", label: "Feels like", num:1 },
    { id: "tab3", label: "Humidity", num:2 },
    { id: "tab4", label: "Precipitation", num:3 },
  ];

  const timeSetter = (t) => {
    var tempT = t[0]+t[1];
    if(tempT<12){
      return t+" am"
    }else if(tempT==12){
      return t+" pm"
    }else{
      tempT-=12;
      if(tempT<10) return "0"+tempT+":00 pm";
      else return tempT+":00 pm";
    }
  }

  const getGradient = (day, temp) => {
    let from, to;
    if (day) {
      if (temp >= 44) to = "to-orange-800";
      else if (temp >= 40) to = "to-orange-600";
      else if (temp >= 32) to = "to-orange-400";
      else if (temp >= 24) to = "to-orange-300";
      else if (temp >= 16) to = "to-cyan-500";
      else to = "to-sky-400";
    }else {
      if (temp >= 44) to = "to-orange-800";
      else if (temp >= 40) to = " to-orange-600";
      else if (temp >= 32) to = " to-yellow-900";
      else if (temp >= 24) to = " to-blue-950";
      else if (temp >= 16) to = " to-blue-800";
      else to = "to-blue-300";
    }
    return `bg-gradient-to-b from-sky-700 ${to}`;
  }

  return (
    <div className="mx-0 px-0 my-80 py-10">
      {/* {console.log(forecastData)} */}
      <HourlyCardTab tabs={tabs} setActiveTab />
      <div className=" rounded-lg select-none scrollbar-custom grid grid-flow-col overflow-x-scroll">
        {forecastData.hour.map((obj, index) => {
          const hourTime = timeSetter(obj.time.split(" ")[1]);
          const {temp_c,feelslike_c, humidity, precip_mm} = obj;
          const data = [[{ value:temp_c }],[{value:feelslike_c}],[{value:humidity}],[{value:precip_mm}]];
          const units = ["°C","°C",]
          const curr= tabs.find((tab) => tab.id === activeTab)?.num
          return (
            <div key={obj.time} className={` py-3 max-sm:px-2 min-sm:px-5 justify-items-center ${getGradient(obj.is_day, temp_c)}`}>
              <h2 className="text-secondary3 my-2 text-center">{hourTime}</h2>
              <div className=" min-sm:h-16 max-sm:h-12">
                <img src={obj.condition.icon} className=" max-sm:scale-150 min-sm:scale-200 max-sm:my-4 min-sm:my-8" alt="Weather Icon" />
              </div>
              <HourCardChart data={data[curr]} mini={minis[curr]} maxi={maxis[curr]} units={units[curr]} />
            </div>
          );
          })}
      </div>
      
    </div>
  )
}

export default HourlyForecast;