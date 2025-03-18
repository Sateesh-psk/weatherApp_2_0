import React from 'react'

const AdditionalDetailsCard = (props) => {
  return (
    <div>
      <p className=' animate-blur-clear min-sm:text-8xl max-sm:text-6xl'>
        {props.primary}
        <span className='min-sm:text-xl max-sm:text-lg tracking-normal'> {props.units}</span>
      </p>
      <h2 className=' my-3 text-2xl text-secondary1'>{props.secondary}</h2>
    </div>
  )
}

export default AdditionalDetailsCard