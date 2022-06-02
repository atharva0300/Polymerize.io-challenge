import React from 'react'

function Header() {
  return (
    <header className = "w-fit h-48 bg-red-400 flex flex-col justify-center">
      <img src = "./img/logo.png" alt = "logo" className='self-center'/>
      <div className='self-center flex flex-col'>
          <p className='w-2/3 self-center text-lg font-normal text-gray-200 font-sans'>SPA app with simple dashboard that displays four tiles, each displaying a single statistic (Mean, Median, Std Deviation, Mode) for a 
            dataset that is retrieved via a REST API call. The user should be able to request new data to be loaded and to see the statistics in the 
            tiles update to reflect the new dataset.
          </p>
      </div>
    </header>
  )
}

export default Header