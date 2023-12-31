import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ movies,urlimage,query }) => {

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`)
  }

  return (
    <div style={{ padding:"10px" }}>
      {movies ? (
        <>
          {query ? (
            <h2 className="title_query">Resultado: <span>{query}</span></h2>
          ):(
            <h2 className='title_default'>Os Mais Votados</h2>
          )}
          
        <main className='container_movies'>
          {movies.map((movie) => (
            <article key={movie.id}>
              <img src={`${urlimage}${movie.poster_path}`.toString()} alt={movie.original_title} />
              <p>Popularidade: <span>{movie.popularity}</span></p>
              <p>Média dos votos: <span>{(movie.vote_average * 10).toFixed(2)}%</span></p>
              <button
              className='button_movie'
              onClick={()=>handleClick(movie.id)}
              >Ler Mais</button>
              
            </article>

          ))}
        </main>
        </>
      ) : (
        <h2>Carregando...</h2>
      ) }
    </div>
  )
}

export default Home