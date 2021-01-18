import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MovieContext } from '../MovieContext'

import movieLogos from '../pics/Movies/movieLogos'
import headerLogo from '../pics/logo.png'
import { findPhoto } from '../helpers/functions';

import './Header.css'


function Header() {
    const { currentMovie } = useContext(MovieContext)

    return (
        <div className="header_container">
            <Link to="/">
                {currentMovie ?
                    <img className="header_image_current_movie" src={findPhoto(movieLogos, currentMovie, 'logo')} alt={currentMovie} />
                    :
                    <img className="header_image" src={headerLogo} alt="star wars logo" />}
            </Link>
        </div>
    )
}

export default Header
