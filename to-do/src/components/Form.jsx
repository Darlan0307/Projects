import { Button, Paper, TextField } from '@mui/material'
import React from 'react'

export default function Form() {
  return (
    <Paper>
        <div style={{ display:"flex", justifyContent:"flex-end", margin:"2em 0em" }}>
            <TextField 
            id="outlined-basic" 
            label="Tarefa" 
            variant="outlined" 
            fullWidth
            />
            <Button variant="text">Add</Button>
        </div>
    </Paper>
  )
}
