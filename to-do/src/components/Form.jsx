import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form({ addTodo }) {

    const [text,setText] = useState("")
    const [id,setId] = useState(0)

    const createTodo = () => {
        if(text){
            const todo = { id:id, text:text }
            setId(id + 1)
            addTodo(todo)
            setText("")
            document.getElementById('outlined-basic').focus()
        }else{
            alert("Escreva alguma tarefa")
        }
    }
  return (
    <Paper>
        <div style={{ display:"flex", justifyContent:"flex-end", margin:"2em 0em" }}>
            <TextField 
            value={text}
            id="outlined-basic" 
            label="Tarefa" 
            variant="outlined" 
            fullWidth
            onChange={ (e) => setText(e.target.value) }
            />
            <Button variant="text" onClick={createTodo}>Add</Button>
        </div>
    </Paper>
  )
}
