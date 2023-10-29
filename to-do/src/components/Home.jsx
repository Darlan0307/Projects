import { Container } from '@mui/material'
import React from 'react'
import Form from './Form'
import TodoItem from './TodoItem'

export default function Home() {
  return (
    <Container maxWidth="xs">
        <Form/>
        <TodoItem/>
        <TodoItem/>
    </Container>
  )
}
