import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PostsContext } from '../context/PostsContext'

const PostCurrent = () => {
    const {posts} = useContext(PostsContext)
    const { id } = useParams()

    const navigate = useNavigate()

    let postCurrent = posts.filter(post => post.id == id)
  return (
    <div className='single_post'>
        <h2 style={{ textAlign:"center" }}>{postCurrent[0].title}</h2>
        <p>{postCurrent[0].body}</p>
        <p>{postCurrent[0].body}</p>
        <p>{postCurrent[0].body}</p>
        <button
        className="button"
        onClick={()=>{
            navigate('/')
        }}
        >Voltar</button>
    </div>
  )
}

export default PostCurrent