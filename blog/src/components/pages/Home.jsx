import React, { useContext } from "react"
import { PostsContext } from "../context/PostsContext"

const Home = () => {

  const {posts} = useContext(PostsContext)

  return (
    <div className="posts">
      {posts.length > 0 ? (
        <React.Fragment>
          <h1>Últimos Posts</h1>
          {posts.map((post) => (
            <article key={post.id} className="single_post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button>Ler Mais</button>
            </article>
          ))}
        </React.Fragment>
      ) : (
        <h3>Carregando</h3>
      )}
    </div>
  )
}

export default Home