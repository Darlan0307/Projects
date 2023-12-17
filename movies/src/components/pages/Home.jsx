import React from 'react'

const Home = ({ movies,urlimage,titleDefault }) => {
  return (
    <div style={{ padding:"10px" }}>
      {movies.length > 0 ? (
        <>
          <h2 className='title' >{titleDefault}</h2>
        <main className='container_movies'>
          {movies.map((movie) => (
            <article key={movie.id}>
              <img src={`${urlimage}${movie.poster_path}`.toString()} alt={movie.original_title} />
              <h2>{movie.title}</h2>
              <p>Média dos votos: <strong>{movie.vote_average * 10}%</strong></p>
              <button>Ler Mais</button>
              {/* <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">link</a> */}
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