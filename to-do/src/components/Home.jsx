import { Container } from '@mui/material'
import React, { useState } from 'react'
import Form from './Form'
import TodoItem from './TodoItem'

export default function Home() {

    const [todos,setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos,todo])       
    }

    const deleteTodo = (id) => {
        const filtered = todos.filter((todo) => todo.id !== id)
        setTodos(filtered)
    }

    const editTodo = (id, newText) => {
        const newTodos = [...todos]

        for(var i in newTodos){
            if(newTodos[i].id == id){
                newTodos[i].text = newText
            }
        }

        setTodos(newTodos)

    }

  return (
    <Container maxWidth="xs">
        <Form addTodo={addTodo}/>

        {todos.map((todo) => (

            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/> 

        ))}
        
        
    </Container>
  )
}
