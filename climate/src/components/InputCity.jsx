import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { InputCidade } from './InputStyle'
import SearchIcon from '@mui/icons-material/Search';

const InputCity = () => {
  return (
    <Box sx={{ display:"flex", width:"100%" }}>
        <InputCidade
        type='text'
        placeholder="Digite a sua cidade"
        />
        <Button variant="contained"><SearchIcon/></Button>
    </Box>
  )
}

export default InputCity