import { Box } from '@mui/material'
import React from 'react'
import { ImgClima, NomeCidade, ParagrafoG } from './CurrentWeatherStyle'

const CurrentWeather = ({ dataWeather }) => {
  return (
    <Box sx={{ alignSelf:"center",display:"flex",flexDirection:"column", gap:".5em", textAlign:"center",color:"#eaeaea" }}>
      {dataWeather && <>
        <NomeCidade>{dataWeather.name}</NomeCidade>
        <ImgClima 
          src={`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`}
          alt={dataWeather.weather[0].description}
        />
        <ParagrafoG>{dataWeather.main.temp} °C</ParagrafoG>
        <ParagrafoG>{dataWeather.weather[0].description}</ParagrafoG>
      </>}
    </Box>
  )
}

export default CurrentWeather