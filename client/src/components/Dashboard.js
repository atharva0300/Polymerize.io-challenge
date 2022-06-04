import React from 'react';
import {motion} from 'framer-motion';
import { useEffect } from 'react';

function Dashboard({mean, median , stdDeviation , mode }) {
  
  return (
    <div className='bg-sky-600 w-full h-96 flex flex-row justify-around'>
        <motion.div 
        whileHover={{scale : 1.1}} 
        style = {{alignSelf : "center" , borderRadius : "50%" , backgroundColor : "#075985" , display : "flex" , flexDirection : "column" , justifyItems :"center" , borderWidth : "8px" ,  borderLeftColor : "#0369a1" , borderTopColor : "#0369a1" , borderBottomColor : "#0369a1" , borderRightColor : "#0369a1" , height : "340px" , width : "340px", alignItems : "center"}}
        animate = {{
          x : "0px"
        }}
        initial = {{
          x : "-200px"
        }}
        transition = {{
          type : 'spring'
        }}
        
        >    
          <div className='inner-dashboard'>
            <h2 className='self-center text-3xl font-semibold text-sky-500 font-sans'>Mean</h2>
            <p className='self-center text-4xl mt-2 font-semibold text-white font-sans' data-testid = "meanValue">{mean}</p>
          </div>
        </motion.div>
        
        <motion.div whileHover={{scale : 1.1}} style = {{alignSelf : "center" , borderRadius : "50%" , backgroundColor : "#075985" , display : "flex" , flexDirection : "column" , justifyItems :"center" , borderWidth : "8px" ,  borderLeftColor : "#0369a1" , borderTopColor : "#0369a1" , borderBottomColor : "#0369a1" , borderRightColor : "#0369a1" , height : "340px" , width : "340px", alignItems : "center"}}
        
        animate = {{
          x : "0px"
        }}
        initial = {{
          x : "-200px"
        }}
        transition = {{
          type : 'spring'
        }}
        >
          <div className='inner-dashboard'>
            <h2 className='self-center text-3xl font-semibold text-sky-500 font-sans'>Median</h2>
            <p className='self-center text-4xl mt-2 font-semibold text-white font-sans' data-testid = "medianValue">{median}</p>
          </div>
        </motion.div>


      <motion.div whileHover={{scale : 1.1}} style = {{alignSelf : "center" , borderRadius : "50%" , backgroundColor : "#075985" , display : "flex" , flexDirection : "column" , justifyItems :"center" , borderWidth : "8px" ,  borderLeftColor : "#0369a1" , borderTopColor : "#0369a1" , borderBottomColor : "#0369a1" , borderRightColor : "#0369a1" , height : "340px" , width : "340px", alignItems : "center"}}
              animate = {{
                x : "0px"
              }}
              initial = {{
                x : "200px"
              }}
              transition = {{
                type : 'spring'
              }}

      >
          <div className='inner-dashboard'>
            <h2 className='self-center text-3xl font-semibold text-sky-500 font-sans'>Std Deviation</h2>
            <p className='self-center text-4xl mt-2 font-semibold text-white font-sans' data-testid = "stdDeviationValue">{stdDeviation}</p>
          </div>
        </motion.div>


      <motion.div whileHover={{scale : 1.1}} style = {{alignSelf : "center" , borderRadius : "50%" , backgroundColor : "#075985" , display : "flex" , flexDirection : "column" , justifyItems :"center" , borderWidth : "8px" ,  borderLeftColor : "#0369a1" , borderTopColor : "#0369a1" , borderBottomColor : "#0369a1" , borderRightColor : "#0369a1" , height : "340px" , width : "340px", alignItems : "center"}}
      
      animate = {{
        x : "0px"
      }}
      initial = {{
        x : "200px"
      }}
      transition = {{
        type : 'spring'
      }}
      >
          <div className='inner-dashboard'>
            <h2 className='self-center text-3xl font-semibold text-sky-500 font-sans'>Mode</h2>
            <p className='self-center text-4xl mt-2 font-semibold text-white font-sans' data-testid = "modeValue">{mode}</p>
          </div>
        </motion.div>

    </div>
  )
}

export default Dashboard