import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputCity from './InputCity'
import CurrentWeather from './CurrentWeather'
import ListWeather from './ListWeather'
import axios from 'axios'

const WeatherApp = () => {

  const apiKey = import.meta.env.VITE_API_KEY || "";

  const dateNow = new Date();
  const [hours,setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [dataWeather,setDataWeather] = useState(null);
  const [city,setCity] = useState("");
  const [prevDataClimates,setPrevDataClimates] = useState(null);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      setCity(resposta.data.name);
      setDataWeather(resposta.data);


      const previsao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)

      setHours(dateNow.getHours());
      setMinutes(dateNow.getMinutes());
      setPrevDataClimates(previsao.data.list.slice(0,5));
    });
  }, [apiKey]);

  const searchCity = async () =>{
    try{

      const dataCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`)

      const prevDataCity = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`)

      setHours(dateNow.getHours());
      setMinutes(dateNow.getMinutes());
      setDataWeather(dataCity.data)
      setPrevDataClimates(prevDataCity.data.list.slice(0,5))
    }catch(err){
      console.log("ERROR: ", err);
    }
  }


  

  return (
    <Container maxWidth="xs" sx={{ display:"flex", flexDirection:"column", gap:"2em" }}>
      <InputCity searchCity={searchCity} city={city} setCity={setCity}/>
      <CurrentWeather dataWeather={dataWeather}/>
      <ListWeather prevDataClimates={prevDataClimates} hours={hours} minutes={minutes} setHours={setHours} />
    </Container>
  )
}

export default WeatherApp