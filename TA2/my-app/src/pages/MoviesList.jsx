import React, { useContext } from 'react'
import { useHttpRequest } from '../hooks/Http-request'
import { MovieContext } from '../MovieContext'
import MovieTile from '../components/MovieTile'
import './MoviesList.css'


export default function MoviesList() {
  const url = `${process.env.REACT_APP_ROOT_PATH}films/`
  const [loading, err, data] = useHttpRequest(url)
  const movies = data.results
  const { currentMovie, setCurrentMovie } = useContext(MovieContext)
  setCurrentMovie(null)

  return (
    <div>
      {err && <h1> Couldn't fetch data</h1>}
      {loading && <h2>loading...</h2>}
      {!loading && (
        <div className='movie_list_container'>
          {movies ? movies.map((movie) =>
            <MovieTile
              navId={movie.uid}
              key={movie.id}
              movie={movie.properties}
            />) : null}
        </div>
      )}
    </div>
  )
}
