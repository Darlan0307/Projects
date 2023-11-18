import { Container, List, Paper, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Linkedin from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';

const Sobre = () => {
  return (
    <Container maxWidth="xs">
      <Paper sx={{ padding:"20px",display:"flex",flexDirection:"column", gap:"2em" }}>

      <Typography variant='h5' textAlign="center" fontWeight="bold">Sobre a API</Typography>
      
      <Typography variant="body1" color="text.primary" textAlign="justify" >
        A API Rick and Morty é uma API REST e GraphQL baseada no programa de televisão Rick and Morty.A API de Rick e Morty está repleta de informações canônicas, conforme visto no programa de TV.
      </Typography>

      <a 
      href="https://rickandmortyapi.com/" 
      target='_blank'
      style={{  color:"#333", fontSize:"1.2em", textAlign:"center" }}
      ><strong>acesse o site da API aqui</strong></a>

      <Typography variant='h6' textAlign="center" fontWeight="bold">Aproveite e me siga nas redes socias</Typography>

      <List
      sx={{ display:"flex",flexWrap:"wrap",gap:"1.5em", justifyContent:"center", alignItems:"center" }}
      >
        <li><a href="https://github.com/Darlan0307" target='_blank'><GitHubIcon sx={{fontSize:"3em", color: "#25aae2"}}/></a></li>
        <li><a href="https://www.linkedin.com/in/darlan-martins-8a7956259/" target='_blank'><Linkedin sx={{fontSize:"3em", color: "#25aae2"}}/></a></li>
        <li><a href="https://www.instagram.com/darlan_sw_/" target='_blank'><Instagram sx={{fontSize:"3em", color: "#25aae2"}}/></a></li>
        
      </List>
    </Paper>
    </Container>
  )
}

export default Sobre