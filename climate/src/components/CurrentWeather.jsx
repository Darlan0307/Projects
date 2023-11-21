import { Box } from '@mui/material'
import React from 'react'
import { ImgClima, NomeCidade, ParagrafoG } from './CurrentWeatherStyle'

const CurrentWeather = () => {
  return (
    <Box sx={{ alignSelf:"center",display:"flex",flexDirection:"column", gap:"1em", textAlign:"center",color:"#eaeaea" }}>
      <NomeCidade>Nome do clima</NomeCidade>
      <ImgClima src="" alt="imagem referente ao clima" />
      <ParagrafoG>30°C</ParagrafoG>
      <ParagrafoG>descricao</ParagrafoG>
    </Box>
  )
}

export default CurrentWeather