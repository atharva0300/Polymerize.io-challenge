import React from 'react'
import {animate, motion} from 'framer-motion';
import { useState } from 'react';

function Input({onSubmit, onReload}) {
  const [data , setData] = useState('')
  const [dataset , setUpdateDataSet] = useState('Dataset-1234.json')
  const [displayWindow , toggleDisplayWindow] = useState(false)
  const [displayInputWindow , toggleInputDisplayWindow] = useState(false)
  const [displayNumberError , toggleNumberError] = useState(false)


  // functions
  const onChangeNumber = (e) => {
    console.log('on change detected')
    e.preventDefault();
    setData(e.target.value)
    console.log(e.target.value)
  }

  const onSubmitData = (e) => {
    e.preventDefault();
    
    if(isNaN(data)){
      toggleNumberError(true)
      document.myForm.myInput.value = ''
      toggleDisplayWindow(false)
      toggleInputDisplayWindow(false)
    }else{
      console.log('sending dataset : ' , dataset)
      onSubmit(dataset , data)
      toggleNumberError(false)
      toggleInputDisplayWindow(true)
      toggleDisplayWindow(false)
      document.myForm.myInput.value = '';
    }
  }

  const onReloadData1 = (e) => {
    e.preventDefault();
    setUpdateDataSet('Dataset-1234.json')
    toggleDisplayWindow(true)
    toggleInputDisplayWindow(false)
    toggleNumberError(false)
    onReload('Dataset-1234.json')
  }

  const onReloadData2 = (e) => {
    e.preventDefault();
    setUpdateDataSet('Dataset-4321.json')
    toggleDisplayWindow(true)
    toggleInputDisplayWindow(false)
    toggleNumberError(false)
    onReload('Dataset-4321.json')
  }

  const disableAllToggles = (e) => {
    e.preventDefault();
    toggleDisplayWindow(false)
    toggleInputDisplayWindow(false)
    toggleNumberError(false)
  }

  return (
    <div className='bg-gray-700 w-full h-80 flex flex-col justify-center'>
      <div className='self-center flex flex-row justify-center mt-2'>
        <form onSubmit={(e) => onSubmitData(e)} name = "myForm">
        <motion.input
              name='myInput'
              onFocus={(e) => disableAllToggles(e)}
              data-testid = "searchBar"
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
            data-testid = "submitValue"
        >Submit</motion.button>
        </form>
          
      </div>
      <div className='self-center flex flex-row justify-center'>
        <motion.button 
            className='self-center w-96 h-16 bg-yellow-600 mx-24 mt-8 rounded-full text-2xl text-white'
            animate = {{
              y : 0
            }}
            initial ={{
              y : 100
            }}
            transition = {{
              type : "spring"
            }}
            whileHover = {{
              scale : 1.1
            }}
            onClick = {(e) => onReloadData1(e)}
            data-testid = "reloadValue1"
        >Reload JSON-1234 Data</motion.button>

        <motion.button 
            className='self-center w-96 h-16 bg-yellow-600 mx-24 mt-8 rounded-full text-2xl text-white'
            animate = {{
              y : 0
            }}
            initial ={{
              y : 100
            }}
            transition = {{
              type : "spring"
            }}
            whileHover = {{
              scale : 1.1
            }}
            onClick = {(e) => onReloadData2(e)}
            data-testid = "reloadValue2"
        >Reload JSON-4321 Data</motion.button>

      </div>

      {displayWindow && <motion.div 
        className='h-24 w-96 bg-sky-600 self-end mr-4 rounded-lg flex flex-col justify-center absolute'
        animate = {{
          y : 60
        }}
        initial = {{
          y : 100
        }}
        transition = {{
          type : "spring"
        }}
        onClick = {() => {toggleDisplayWindow(false)}}     
        data-testid = "div1"
      >
        <p className='self-center text-2xl font-sans text-white'>Reloaded {dataset} !</p>
        </motion.div>}

        {displayInputWindow && <motion.div 
          className='h-24 w-96 bg-lime-600 self-end mr-4 rounded-lg flex flex-col justify-center absolute'
          animate = {{
            y : 60
          }}
          initial = {{
            y : 100
          }}
          transition = {{
            type : "spring"
          }}
          onClick = {() => {toggleInputDisplayWindow(false)}} 
          data-testid = "div2"
        >
          <p className='self-center text-2xl font-sans text-white'>{data} added in {dataset}</p>
          </motion.div>}


          {displayNumberError && <motion.div 
            className='h-24 w-96 bg-red-500 self-start mr-4 rounded-lg flex flex-col justify-center absolute ml-4'
          animate = {{
            y : 60
          }}
          initial = {{
            y : 100
          }}
          transition = {{
            type : "spring"
          }}
          onClick = {() => {toggleNumberError(false)}} 
          >
            <p className='self-center text-2xl font-sans text-white'>Entered value not a number ! <br />Enter a number</p>
            </motion.div>}
    </div>
  )
}

export default Input