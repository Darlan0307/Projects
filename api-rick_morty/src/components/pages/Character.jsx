import { Container } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Character({ dataCharacter, idOnClick }) {
    
  
    return (
    <>
    
        {dataCharacter ? dataCharacter.map((character)=>(
            <Container key={character.id}>
                {character.id == idOnClick &&  
                    <Card sx={{ maxWidth: 320, margin:"0 auto", position:"relative" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300px"
                        image={character.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                         {character.name}
                        </Typography>

                        <Typography variant="body1" color="text.primary">
                          Gênero: {character.gender}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                          Espécie: {character.species}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                          Status: {character.status}
                        </Typography>

                        <Typography variant="body1" color="text.primary">
                          Origem: {character.origin.name}
                        </Typography>

                        <Typography variant="body1" color="text.primary">
                          Localização: {character.location.name}
                        </Typography>

                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Link to="/"  style={{ textDecoration: "none", color:"#25aae2", fontSize: "18px",fontSize: "22px", padding: 5   }}>
                        Voltar
                      </Link>
                    </CardActions>
                  </Card>
                }
            </Container>
            
        )) : <h3>Carregando...</h3>}
    </>
    
    
  )
}