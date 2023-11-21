import { Box, Paper } from '@mui/material'
import React from 'react'
import { ListaPrevisoes, TituloSecundatio } from './ListWeatherStyle';

const ListWeather = ({ prevDataClimates, hours, minutes, setHours }) => {

  let cont = 3;

  function incrementar(){ cont+=3 }
  return (
    <>
      {prevDataClimates && <Box>
      <TituloSecundatio>Previsões para as próximas horas</TituloSecundatio>
      <ListaPrevisoes>

          {prevDataClimates.map((dataWeather, index)=>(  
            
                      
            <Paper key={index} sx={{ backgroundColor:"#344A53" }}>
              <li key={index}>
            <img 
            src={`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`}
            alt={dataWeather.weather[0].description}
            />
            <span className='hrs'>{(hours + cont) > 23 ? (hours + cont) - 24 : (hours + cont) }:{minutes}</span>
            
            <p>{dataWeather.main.temp} °C</p>
            <span>{dataWeather.weather[0].description}</span>
            </li>
            {incrementar()}
            </Paper>
            
          ))}
        
      </ListaPrevisoes>
    </Box>}
    </>
  );
}

export default ListWeather