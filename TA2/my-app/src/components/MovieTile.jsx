import React, { useContext } from 'react';

import HoverableComponent from './HoverableComponent';
import Card from './Card';

import { integer_to_roman } from '../helpers/functions'
import { findPhoto } from '../helpers/functions';
import { MovieContext } from '../MovieContext'
import movieLogos from '../pics/Movies/movieLogos'

import './MovieTile.css';

function MovieTile({ movie, navId }) {
	const { title, opening_crawl, episode_id } = movie
	const { currentMovie, setCurrentMovie } = useContext(MovieContext)

	const hoverChildren =
		<section className="star-wars">
			<div className="crawl">
				<div className="title">
					<p>Episode {integer_to_roman(episode_id)}</p>
					<h3>{title}</h3>
				</div>
				<p>{opening_crawl} </p>
			</div>
		</section>

	return (
		<Card link={`movie_details/${navId}`} onClick={() => { setCurrentMovie(title) }}>
			<HoverableComponent hoverChildren={hoverChildren} class="movie">
				<img src={findPhoto(movieLogos, title, 'logo')} alt={title} className="tile_image" />
			</HoverableComponent>
		</Card>
	);
}

export default MovieTile;
