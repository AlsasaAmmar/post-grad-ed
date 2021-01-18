import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import { useHttpRequest } from '../hooks/Http-request'

import Tabs from '../components/Tabs'
import GridItem from '../components/GridItems'
import MovieInfo from '../components/MovieInfo'

import { itemsKeys } from '../helpers/itemsData'
import defaultAvatar from '../pics/avatar.png'
import defaultStarship from '../pics/default spaceship.png'
import defaultPlanet from '../pics/default planet.png'
import defaultSpecies from '../pics/default species.png'

import './MovieDetails.css'

export default function MovieDetails() {
  const navTabs = ['Movie Info', 'Characters', 'Starships', 'Species', 'Planets']
  const history = useHistory();


  const match = useRouteMatch()
  const movieId = match.params.id

  const url = `${process.env.REACT_APP_ROOT_PATH}/films/${movieId}`

  const [loading, err, data] = useHttpRequest(url)
  const movie = data.result ? data.result.properties : null;
  const [currentTab, setCurrentTab] = useState('Movie Info')

  const handleNavClick = (e) => {
    setCurrentTab(e.target.innerHTML)
  }

  const showCurrentTab = () => {
    switch (currentTab) {
      case 'Characters':
        return movie.characters.map(character => <GridItem key={character} defaultPhoto={defaultAvatar} url={character} activeTab={currentTab} elKeys={itemsKeys.characterKeys} />)
      case 'Starships':
        return movie.starships.map(starship => <GridItem key={starship} defaultPhoto={defaultStarship} url={starship} activeTab={currentTab} elKeys={itemsKeys.starshipKeys} />)
      case 'Species':
        return movie.species.map(specie => <GridItem key={specie} defaultPhoto={defaultSpecies} url={specie} activeTab={currentTab} elKeys={itemsKeys.speciesKeys} />)
      case 'Planets':
        return movie.planets.map(planet => <GridItem key={planet} defaultPhoto={defaultPlanet} url={planet} activeTab={currentTab} elKeys={itemsKeys.planetsKeys} />)
      default:
        return <MovieInfo movie={movie} />
    }
  }

  return (
    <div className='movie_details_container'>
      <Tabs tabs={navTabs} onClick={handleNavClick} onIconClick={() => { history.push('/') }} />
      {loading && <p>loading...</p>}
      {err && <h1>Couldn't fetch data</h1>}
      {!loading && (
        <Fade duration={500}>
          <div className="tabs_body">
            {showCurrentTab()}
          </div>
        </Fade>
      )}
    </div>
  )
}

