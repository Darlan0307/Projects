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
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');


  useEffect(()=>{
    const apiUrl = "https://rickandmortyapi.com/api/character";
    const pages = [1, 2, 3];

    Promise.all(
      pages.map((page) =>
        axios.get(`${apiUrl}?page=${page}&gender=${gender}&species=${species}&status=${status}`)
          .then((response) => response.data.results)
      )
    )
    .then((characterData) => {
      const allCharacters = characterData.flat();
      setDataCharacter(allCharacters);
    })
    .catch((err) => console.log("ERROR: " + err));


  },[gender,species,status])

  if(!dataCharacter){
    return <h3>Carregando...</h3>
  }

  return (
    <BrowserRouter>
        <Cabecalho/>
            <Container maxWidth="lg" >
                <Routes>
                    <Route element={<Home dataCharacter={dataCharacter} setIdOnclick={setIdOnclick} setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} gender={gender} species={species} status={status}/>} path='/'/>
                    <Route element={<Character dataCharacter={dataCharacter} idOnClick={idOnClick}/>} path='/character'/>
                    <Route element={<Sobre/>} path='/sobre'/>
                </Routes>
            </Container>
        <Rodape/>
    </BrowserRouter>
  )
}

export default Index