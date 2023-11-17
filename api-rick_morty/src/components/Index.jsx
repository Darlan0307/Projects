import React from 'react'
import Cabecalho from './layout/Cabecalho'
import Rodape from './layout/Rodape'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { Container } from '@mui/material';
const Index = () => {
  return (
    <BrowserRouter>
        <Cabecalho/>
            <Container maxWidth="lg" >
                <Routes>
                    <Route element={<Home/>} path='/'/>
                    <Route element={<Sobre/>} path='/sobre'/>
                </Routes>
            </Container>
        {/* <Rodape/> */}
    </BrowserRouter>
  )
}

export default Index