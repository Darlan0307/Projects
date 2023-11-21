import { Paper } from '@mui/material'
import React from 'react'
import { ListaPrevisoes, TituloSecundatio } from './ListWeatherStyle';

const ListWeather = () => {
  return (
    <Paper sx={{ padding:"10px" }}>
      <TituloSecundatio>Previsões para as próximas horas</TituloSecundatio>
      <ListaPrevisoes>
        <li>
        <img src="" alt="imagem referente ao clima" />
        <p>30°C</p>
        <p>descricao</p>
        </li>
        <li>
        <img src="" alt="imagem referente ao clima" />
        <p>30°C</p>
        <p>descricao</p>
        </li>
        <li>
        <img src="" alt="imagem referente ao clima" />
        <p>30°C</p>
        <p>descricao</p>
        </li>
      </ListaPrevisoes>
    </Paper>
  );
}

export default ListWeather