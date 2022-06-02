import React from 'react'

function Input() {
  return (
    <div className='bg-black w-full h-96 flex flex-col justify-center'>
      <div className='self-center flex flex-row justify-center'>
          <input type = 'text' placeholder='Enter a Number...'  className='self-center h-8 w-96'/>
          <button className='self-center bg-orange-400 w-24 h-8' type='submit'>Submit</button>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  )
}

export default Input