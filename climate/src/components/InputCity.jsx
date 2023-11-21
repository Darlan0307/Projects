import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { InputCidade } from './InputStyle'
import SearchIcon from '@mui/icons-material/Search';

const InputCity = ({ searchCity, city, setCity }) => {
  return (
    <Box sx={{ display:"flex", width:"100%" }}>
        <InputCidade
        type='text'
        placeholder="Digite a sua cidade"
        value={city}
        onChange={(e)=> setCity(e.target.value)}
        />
        <Button 
        variant="contained"
        onClick={searchCity}
        ><SearchIcon/></Button>
    </Box>
  )
}

export default InputCity