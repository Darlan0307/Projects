import React, { useEffect, useState } from 'react'
import Cabecalho from './layout/Cabecalho'
import Rodape from './layout/Rodape'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { Container } from '@mui/material';
import axios from 'axios';
import Character from './pages/Character';
const Index = () => {
  const [dataCharacter, setDataCharacter] = useState(null);
  const [idOnClick, setIdOnclick] = useState(null);


  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character")
    .then((response) => response.data.results)
    .then((data) => setDataCharacter(data))
    .catch((err) => console.log("ERROR: " + err))

  },[])

  if(!dataCharacter){
    return <h3>Carregando...</h3>
  }

  return (
    <BrowserRouter>
        <Cabecalho/>
            <Container maxWidth="lg" >
                <Routes>
                    <Route element={<Home dataCharacter={dataCharacter} setIdOnclick={setIdOnclick}/>} path='/'/>
                    <Route element={<Character dataCharacter={dataCharacter} idOnClick={idOnClick}/>} path='/character'/>
                    <Route element={<Sobre/>} path='/sobre'/>
                </Routes>
            </Container>
        {/* <Rodape/> */}
    </BrowserRouter>
  )
}

export default Index