import React from 'react'
import Cabecalho from './layout/Cabecalho'
import Rodape from './layout/Rodape'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
const Index = () => {
  return (
    <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Sobre/>} path='/sobre'/>
            </Routes>
        <Rodape/>
    </BrowserRouter>
  )
}

export default Index