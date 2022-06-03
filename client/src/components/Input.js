import React from 'react'
import {motion} from 'framer-motion';
import { useState } from 'react';

function Input({onSubmit, onReload}) {
  const [data , setData] = useState('')


  // functions
  const onChangeNumber = (e) => {
    console.log('on change detected')
    e.preventDefault();
    setData(e.target.value)
    console.log(e.target.value)
  }

  const onSubmitData = (e) => {
    e.preventDefault();
    
    if(document.myForm.myInput.value===''){
      console.log('no input')
    }else{
      onSubmit(data)
      document.myForm.myInput.value = '';
    }
  }

  const onReloadData1 = (e) => {
    e.preventDefault();
    onReload('Dataset-1')
  }

  const onReloadData2 = (e) => {
    e.preventDefault();
    onReload('Dataset-2')
  }

  return (
    <div className='bg-gray-700 w-full h-80 flex flex-col justify-center'>
      <div className='self-center flex flex-row justify-center mt-2'>
        <form onSubmit={(e) => onSubmitData(e)} name = "myForm">
        <motion.input
              name='myInput'
              className='input-number text-center text-3xl self-center h-16 rounded-l-xl text-orange-400 placeholder:text-orange-400'
              placeholder='Enter a number'
              type="text"
                animate = {{
                  scale : 1.1,
                  opacity : 1
                }}
                initial = {{
                  opacity : 0.1
                }}
                transition = {{
                  type : "spring",
                  stiffness : 60
                }}
                onChange = {(e) => onChangeNumber(e)}
                
        ></motion.input>
        <motion.button 
            className='input-button self-center bg-orange-400 rounded-r-xl text-white text-3xl'
            type='submit'
            animate = {{
              scale : 1.1,
              opacity : 1
            }}
            initial = {{
              opacity : 0.1
            }}
            transition = {{
              type : "tween",
              stiffness : 60
            }}
        >Submit</motion.button>
        </form>
          
      </div>
      <div className='self-center flex flex-row justify-center'>
        <motion.button 
            className='self-center w-96 h-16 bg-yellow-600 mx-24 mt-8 rounded-full text-2xl text-white'
            animate = {{
              y : "0px",
            }}
            initial ={{
              y : "100px"
            }}
            transition = {{
              type : "spring"
            }}
            whileHover = {{
              scale : 1.1
            }}
            onClick = {(e) => onReloadData1(e)}
        >Reload JSON-1234 Data</motion.button>

        <motion.button 
            className='self-center w-96 h-16 bg-yellow-600 mx-24 mt-8 rounded-full text-2xl text-white'
            animate = {{
              y : "0px"
            }}
            initial ={{
              y : "100px"
            }}
            transition = {{
              type : "spring"
            }}
            whileHover = {{
              scale : 1.1
            }}
            onClick = {(e) => onReloadData2(e)}
        >Reload JSON-4321 Data</motion.button>

      </div>
    </div>
  )
}

export default Input