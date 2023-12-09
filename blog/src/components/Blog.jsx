import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './layout/NavBar'
import Container from './layout/Container'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import Gerenciar from './pages/Gerenciar'

const Blog = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Container>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/newpost' element={<NewPost/>}/>
                <Route path='/gerenciar' element={<Gerenciar/>}/>
            </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default Blog