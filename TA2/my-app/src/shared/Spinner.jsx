import React from 'react'
import './Spinner.css'

export default function Spinner () {
  return (
    <div className='spinner_container'> 
    <div className='spinner_background'>
      <div className='target'>
        <div>
          <img className='spinner_img' src='../pics/giphy.gif' alt='Star wars log' />
        </div>
      </div>
    </div>
    </div>
  )
}
