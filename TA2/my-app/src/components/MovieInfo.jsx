import React from 'react';
import { findPhoto } from '../helpers/functions';
import moviesPics from '../pics/Movies/movieLogos';
import Card from './Card';

import './MovieInfo.css';

function MovieInfo({ movie }) {
    const { title, director, producer, opening_crawl, release_date } = movie
    return (
        <Card class="movie_info_card">
            <div className='movie_info_container'>
                <img src={findPhoto(moviesPics, title, 'cover')} alt={`the movie ${title}`} />
                <div className="movie_info_sub-container">
                    <ul>
                        <li>
                            <h2>{title}</h2> </li>
                        <i class="bi-alarm"></i>
                        <li><span>Release date: </span>  {release_date}</li>
                        <li><span>Director: </span>  {director}</li>
                        <li><span>Producer(s): </span> {producer}</li>
                        <li><span>Opening crawl: </span>  {opening_crawl}</li>
                    </ul>

                </div>

            </div>
        </Card>
    );
}

export default MovieInfo;
