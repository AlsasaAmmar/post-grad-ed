import React from 'react'

import { Fade } from 'react-awesome-reveal'

import logo from '../pics/logo.jpg'
import './OpeningSpinner.css'

export default function OpeningSpinner () {
  return (
        <div className="opening_spinner center_absolute">
            <Fade duration={2000}> 
          <img className='opening_spinner_photo'  src={logo} alt='Star wars logo' />
            </Fade>
        </div>
  )
}
