import { Container } from '@mui/material'
import React from 'react'
import InputCity from './InputCity'
import CurrentWeather from './CurrentWeather'
import ListWeather from './ListWeather'

const WeatherApp = () => {

  const apiKey = import.meta.env.VITE_API_KEY || "";

  return (
    <Container maxWidth="xs" sx={{ display:"flex", flexDirection:"column", gap:"2em" }}>
      <InputCity/>
      <CurrentWeather/>
      <ListWeather/>
    </Container>
  )
}

export default WeatherApp