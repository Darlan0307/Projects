import { TextField } from '@mui/material'
import React from 'react'
import './index.css'

const InputForm = ({ amount ,setAmount}) => {
  return (
    <TextField 
    className='input_form' 
    variant='outlined' 
    label="Digite o valor"
    value={amount}
    type='number'
    onChange={(e)=> setAmount(e.target.value)}
    />
  )
}

export default InputForm