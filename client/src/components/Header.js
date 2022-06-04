import React from 'react'
import logo from '../img/logo.png';
import {motion} from 'framer-motion';


function Header() {
  return (
    <header className = "w-fit h-64 bg-white flex flex-col justify-center self-center" data-testid = "loadHeading">
      <img src = {logo} alt = "logo" className='self-center' data-testid = "loadImage" />
      <div className='self-center flex text-2xl flex-col'>
        <motion.h2 
          className='self-center font-sans font-semibold text-gray-600'
          animate = {{
            opacity : 1,
            y : "0px "
          }}
          initial = {{
            opacity : 0.1,
            y : "-200px"
          }}
          
        >ReactJS Test</motion.h2>
          
          <motion.p 
            className='self-center align-center text-lg text-gray-500 font-normal font-sans header-para'
            animate = {{
              scaleX : 1
            }}
            initial = {{
              scaleX : 0.1
            }}
            transition = {{
              scaleX : 5
            }}
            data-testid = "loadText"
            >SPA app with simple dashboard that displays four tiles, each displaying a single statistic (Mean, Median, Std Deviation, Mode) for a 
            dataset that is retrieved via a REST API call. The user should be able to request new data to be loaded and to see the statistics in the 
            tiles update to reflect the new dataset.
          </motion.p>
        
      </div>
    </header>
  )
}

export default Header