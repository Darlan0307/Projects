import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './layout/NavBar'
import Container from './layout/Container'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import Gerenciar from './pages/Gerenciar'
import PostCurrent from './pages/PostCurrent'
import UpdatePost from './pages/UpdatePost'


const Blog = () => {

  return (
    <BrowserRouter>
        <NavBar/>
        <Container>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/newpost' element={<NewPost/>}/>
                <Route path='/gerenciar' element={<Gerenciar/>}/>
                <Route path='/post/:id' element={<PostCurrent/>}/>
                <Route path='/editpost/:id' element={<UpdatePost/>}/>
            </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default Blog