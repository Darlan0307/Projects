import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CharacterCard({ character, setIdOnclick}) {
  return (
    <Card sx={{ width: 250, position:"relative" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={character.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" textAlign="center">
            {character.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link 
        to="/character"  
        style={{ position:"absolute", bottom: 10, right: 10, textDecoration: "none", color:"#25aae2", fontSize: "18px"  }}
        onClick={()=> setIdOnclick(character.id)}
        >
          Mais
        </Link>
      </CardActions>
    </Card>
  );
}