import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MovieContext } from './MovieContext'

import { Fade } from 'react-awesome-reveal'
import OpeningSpinner from './shared/OpeningSpinner'
import Header from './components/Header'
import MovieList from './pages/MoviesList';
import MovieDetails from './pages/MovieDetails'
import SearchResults from './pages/SearchResults'

import './App.css';
import Search from './components/Search';


function App() {
	const [spinnerLoaded, setSpinnerLoaded] = useState(true)
	const [currentMovie, setCurrentMovie] = useState('')
	setTimeout(() => {
		setSpinnerLoaded(false)
	}, 2500)

	return (
		<div className="App">
			{spinnerLoaded && <OpeningSpinner />}
			{!spinnerLoaded &&
				<div>
					<Router>
						<Fade duration={1000}>
							<MovieContext.Provider value={{ currentMovie, setCurrentMovie }}>
								<Header />
								<Search />
								<Route exact path="/" component={MovieList} />
								<Route exact path="/search" component={SearchResults} />
								<Route exact path="/movie_details/:id" component={MovieDetails} />
							</MovieContext.Provider>
						</Fade>
					</Router>
				</div>
			}
		</div>
	);
}

export default App;
