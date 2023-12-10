import React, { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const Gerenciar = () => {

  const {posts,setPosts} = useContext(PostsContext)

  const navigate = useNavigate()

  const handleDelete = (id) => {
    const escolha = confirm("Deseja realmente excluir esse post?")

    if(escolha){
      const newPosts = posts.filter(post => post.id !== id)
      setPosts(newPosts)
    }

  }

  const handleEdit = (id) => {
    navigate(`/editpost/${id}`)
  }

  return (
    <div className="gerenciar">
      {posts.length > 0 ? (
        <React.Fragment>
          <h1>Todos os Posts</h1>
          <hr />
          {posts.map((post) => (
            
            <article key={post.id} style={{ borderBottom:"2px solid white",paddingBottom:"2em" }}>
              <h2>{post.title}</h2>
              
              <div className='config_buttons'>
                <button 
                onClick={()=>handleEdit(post.id)}
                className='edit_button'><EditIcon sx={{ fontSize:30,color:"#242424" }}/></button>
                <button 
                onClick={()=>handleDelete(post.id)}
                className='remove_button'><DeleteIcon sx={{ fontSize:30,color:"#242424" }}/></button>
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