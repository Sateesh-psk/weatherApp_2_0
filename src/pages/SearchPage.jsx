import React, { useEffect } from 'react'
import { SearchIcon } from 'lucide-react'
import useWeatherStore from "../store/weatherStore"
import { Toaster,toast } from 'react-hot-toast'


const SearchPage = () => {
  const { city, weather, lastFetchedCity, loading, error, setCity, fetchWeatherData} = useWeatherStore();
  var toastId;

  const handleSearch = () =>{
    if(city=="")
      toast.error('Enter a city name',{duration:1000});
    else if(weather && city.toLowerCase() == lastFetchedCity.toLowerCase() )
      toast.error('Enter new city name',{duration:1200});
    else fetchWeatherData();
  }
  useEffect(()=>{
    toast.loading('Fetching...');
  },[loading])

  useEffect(()=>{
    if(weather){
      toast.dismiss(toastId);
      toast.success('Fetched Successfully',{duration:1500});
      // console.log(weather);
    }
  },[weather])

  useEffect(()=>{
    toast.dismiss(toastId);
    if(error) toast.error(error,{duration:1500});
  },[error]);

  return (
    <div className=' my-70 flex flex-cols w-1/2 max-lg:w-2/3 max-md:w-full justify-self-center'>
      <input
        maxLength={30}
        name="cityName"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        placeholder='Enter city name here'
        autoComplete='off'
        
        className=' pl-5 py-2 max-sm:tracking-normal tracking-wider rounded-l-md focus:outline-0 text-black bg-white w-full'
      />
      <button
        className=' select-none bg-white pr-5 rounded-r-md hover:cursor-pointer'
        onClick={()=>handleSearch()}
      >
        <SearchIcon className=' text-black' />
      </button>

      <Toaster />
    </div>
  )
}

export default SearchPage;