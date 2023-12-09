import React, { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'

const Gerenciar = () => {

  const {posts,setPosts} = useContext(PostsContext)

  return (
    <div className="gerenciar">
      {posts.length > 0 ? (
        <React.Fragment>
          <h1>Todos os Posts</h1>
          {posts.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              
              <div>
                <button>editar</button>
                <button>remover</button>
              </div>
              
            </article>
          ))}
        </React.Fragment>
      ) : (
        <h3>Carregando</h3>
      )}
    </div>
  )
}

export default Gerenciar