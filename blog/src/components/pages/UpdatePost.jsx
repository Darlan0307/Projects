import React from 'react'

const UpdatePost = () => {
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
      >Atualizar</button>
    </div>
  )
}

export default UpdatePost