import React, { forwardRef } from 'react'
import { SearchIcon } from 'lucide-react'

const SearchInput = forwardRef(({ city, onChange, onKeyDown, onSearch }, ref) => {
  return (
    <div className='flex w-1/2 max-lg:w-2/3 max-md:w-full'>
      <input
        ref={ref}
        maxLength={30}
        name="cityName"
        spellCheck="false"
        value={city}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Enter city name here"
        autoComplete="off"
        className='pl-5 py-2 max-sm:tracking-normal tracking-wider rounded-l-md focus:outline-0 text-black bg-blue-50 w-full'
      />
      <button
        className='select-none bg-blue-50 pr-5 rounded-r-md hover:cursor-pointer'
        onClick={onSearch}
      >
        <SearchIcon className='text-black' />
      </button>
    </div>
  );
});

export default SearchInput;
