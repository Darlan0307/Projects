import React, { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Gerenciar = () => {

  const {posts,setPosts} = useContext(PostsContext)

  return (
    <div className="gerenciar">
      {posts.length > 0 ? (
        <React.Fragment>
          <h1>Todos os Posts</h1>
          {posts.map((post) => (
            
            <article key={post.id} style={{ borderBottom:"2px solid white",paddingBottom:"2em" }}>
              <h2>{post.title}</h2>
              
              <div className='config_buttons'>
                <button className='edit_button'><EditIcon sx={{ fontSize:30,color:"#242424" }}/></button>
                <button className='remove_button'><DeleteIcon sx={{ fontSize:30,color:"#242424" }}/></button>
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