import React from 'react'
import { MoonIcon, SunMedium } from 'lucide-react';

const AstroDetailCard = (props) => {
  return (
    <div className=' max-lg:my-16 flex min-sm:gap-4 select-none'>
      <div className=' my-auto animate-slide-up'>
        <h1 className=' min-sm:text-3xl max-sm:text-xl text-secondary3'>{props.rise}</h1>
        <h3 className=' text-secondary2 text-center max-sm:text-sm'>RISE</h3>
      </div>
      {props.sun=='1' ? 
        <SunMedium className=' w-40 h-40 max-sm:w-20 max-sm:h-20 stroke-1 text-red-400' /> :
        <MoonIcon className=' w-40 h-40 max-sm:w-20 max-sm:h-20 stroke-1 text-blue-400' />
      }
      <div className=' my-auto animate-slide-up'>
        <h1 className=' min-sm:text-3xl max-sm:text-xl text-secondary3'>{props.set}</h1>
        <h3 className=' text-secondary2 text-center max-sm:text-sm'>SET</h3>
      </div>
    </div>
  )
}

export default AstroDetailCard