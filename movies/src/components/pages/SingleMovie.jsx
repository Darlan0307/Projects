import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleMovie = ({ movies,urlimage }) => {

  const { id } = useParams()

  const movieActive = movies.filter(movie => movie.id == id)[0] || {}

  const navigate = useNavigate()

  return (
    <div>
      {movieActive ? (
        <article className='single_movie'>
          <img src={`${urlimage}${movieActive.poster_path}`.toString()} alt={movieActive.original_title} />
          <h2>{movieActive.title}</h2>
          <p><span>Descrição: </span><br /> {movieActive.overview}</p>
          <p><span>Lançamento: </span>{movieActive.release_date}</p>
          <p><span>Popularidade:</span> {movieActive.popularity}</p>
          <p><span>Quantidade de votos:</span> {movieActive.vote_count}</p>
          <p><span>Média dos votos: </span> {(movieActive.vote_average * 10).toFixed(2)}%</p>
          <button
          className='button_movie'
          onClick={()=> navigate('/')}
          >Voltar</button>
        </article>
      ):(
        <h2>Carregando...</h2>
      )}
    </div>
  )
}

export default SingleMovie