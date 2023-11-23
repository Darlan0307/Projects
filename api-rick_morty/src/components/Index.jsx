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
  const [name, setName] = useState('');
  const [ativandoBusca, setAtivandoBusca] = useState(false)


  useEffect(()=>{
    const apiUrl = "https://rickandmortyapi.com/api/character";
    const pages = [1];

    Promise.all(
      pages.map((page) =>
        axios.get(`${apiUrl}?page=${page}&name=${name}&gender=${gender}&species=${species}&status=${status}`)
          .then((response) => response.data.results)
      )
    )
    .then((characterData) => {
      const allCharacters = characterData.flat();
      setDataCharacter(allCharacters);
    })
    .catch((err) => {
      alert("Ate o momento nao existe personagem com esse filtro");
      console.log("ERROR: ", err)
    });

    
  },[gender,species,status,ativandoBusca])

  if(!dataCharacter){
    return <h1 style={{ color:"white" }}>Carregando...</h1>
  }

  return (
    <BrowserRouter>
        <Cabecalho/>
            <Container maxWidth="lg" >
                <Routes>
                    <Route element={<Home dataCharacter={dataCharacter} setIdOnclick={setIdOnclick} setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} gender={gender} species={species} status={status} setAtivandoBusca={setAtivandoBusca} setName={setName}/>} path='/'/>
                    <Route element={<Character dataCharacter={dataCharacter} idOnClick={idOnClick}/>} path='/character'/>
                    <Route element={<Sobre/>} path='/sobre'/>
                </Routes>
            </Container>
        <Rodape/>
    </BrowserRouter>
  )
}

export default Index