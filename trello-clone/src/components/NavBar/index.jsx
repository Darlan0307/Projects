import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './NavBar.module.css'

export default function NavBar({ setTextNewColumn, setStateNewColumn }) {

  const [stateForm,setStateForm] = React.useState(false)
 
  const actionButton = () => {
    setStateForm(false)
    setStateNewColumn(true)
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom:"20px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff31", padding: 1 }}>
        <Toolbar className={styles.navigation}>
            <Box display="flex" justifyContent="center" width="100%">

                <Box component="img" width="150px" src="/assets/trello-logo.png"/>
            </Box>

            {stateForm && <>
              <TextField 
                id="outlined-basic" 
                label="Nome da Coluna"
                onChange={(e) => setTextNewColumn(e.target.value)}
                />
            <Button 
            onClick={actionButton}
            variant="text" 
            sx={{ color: "#lightblue", marginLeft: 2,fontSize: 18 }}>Criar</Button>
            </>}

            <Button sx={{ color:"#FFF", fontSize: 20, marginLeft: 10 }} size="large" startIcon={<AddIcon/>} onClick={() => setStateForm(true)}> COLUMN </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}