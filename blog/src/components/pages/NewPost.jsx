import { useContext, useState } from "react"
import { PostsContext } from "../context/PostsContext"
import { useNavigate } from "react-router-dom"

const NewPost = () => {

  const {posts,setPosts} = useContext(PostsContext)
  const navigate = useNavigate()

  const [newPost,setNewPost] = useState({
    id: Number(posts.length + 2),
    title: null,
    body: null
  })

  const addNewPost = () => {
    const values = Object.values(newPost)

    if(!values.includes(null)){
      const copyPosts = posts.slice() 
      // console.log(copyPosts);  
      copyPosts.unshift(newPost)
      setPosts(copyPosts)
      navigate('/')

      // Mandando para a API
      // axios.post("https://jsonplaceholder.typicode.com/posts",{
      //   body: JSON.stringify({
      //     title: newPost.title,
      //     body: newPost.body,
      //     userId: 1,
      //   }),
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
      // })
      // .then((response) => console.log(response))
      
    }


  }

  return (
    <div className="form_newpost">
      <div>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title"
        onChange={(e)=> setNewPost({
          ...newPost,
          title:e.target.value
        })}
        />
      </div>
      <div>
        <label htmlFor="text">Texto:</label>
        <textarea id="text"
        onChange={(e)=> setNewPost({
          ...newPost,
          body:e.target.value
        })}
        ></textarea>
      </div>
      <button
      className="button"
      onClick={()=>{
        addNewPost()
        
      }}
      >Enviar</button>
    </div>
  )
}

export default NewPost