import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PostsContext } from '../context/PostsContext'

const UpdatePost = () => {

  const {posts,setPosts} = useContext(PostsContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const [postActive,setPostActive] = useState(posts.filter(post => post.id == id)[0] || "")
  
  const handleEdit = () => {
    const values = Object.values(postActive)

    if(!values.includes(null)){
      const newPosts = posts.filter(post => post.id != id)

      newPosts.unshift(postActive);

      setPosts(newPosts)

      navigate('/')
      alert("Post atualizado com sucesso!");
    }
  }

  return (
    <div className="form_newpost">
      <div>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title"
        value={postActive.title}
        onChange={(e)=> setPostActive({
          ...postActive,
          title: e.target.value
        })}
        />
      </div>
      <div>
        <label htmlFor="text">Texto:</label>
        <textarea id="text"
        value={postActive.body}
        onChange={(e)=> setPostActive({
          ...postActive,
          body: e.target.value
        })}
        ></textarea>
      </div>
      <button
      className="button"
      onClick={handleEdit}
      >Atualizar</button>
    </div>
  )
}

export default UpdatePost