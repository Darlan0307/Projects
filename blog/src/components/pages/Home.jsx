import React, { useContext } from "react"
import { PostsContext } from "../context/PostsContext"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const {posts} = useContext(PostsContext)

  const navigate = useNavigate()

  const userNavigation = (id) => {
    navigate(`/post/${id}`)
  }

  return (
    <div className="posts">
      {posts.length > 0 ? (
        <React.Fragment>
          <h1>Últimos Posts</h1>
          <hr />
          {posts.map((post) => (
            <article key={post.id} className="single_post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button
              className="button"
              onClick={()=>userNavigation(post.id)}
              >Ler Mais</button>
              <hr />
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