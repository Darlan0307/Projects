import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectFiltre({ setGender,setSpecies,setStatus,gender,species,status }) {


  return (
    <>
    {/* GENDER */}
    <FormControl sx={{ m: 1, minWidth: 120, borderColor:"#fff", color:"white" }} size="small" >
      <InputLabel  id="demo-select-small-label" style={{ color: 'white', fontSize:"1.2em",borderColor:"white" }}>Gênero</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={gender}
        label="Gender"
        onChange={(e)=>setGender(e.target.value)}
        style={{ color:"white"}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Male">Maculino</MenuItem>
        <MenuItem value="Female">Feminino</MenuItem>
        <MenuItem value="unknown">Desconhecido</MenuItem>
      </Select>
    </FormControl>

    {/* STATUS */}
    <FormControl sx={{ m: 1, minWidth: 120,}} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: 'white', fontSize:"1.2em",borderColor:"white" }}>Status</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={status}
        label="status"
        onChange={(e)=>setStatus(e.target.value)}
        style={{ color:"white"}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Alive">Vivo</MenuItem>
        <MenuItem value="Dead">Morto</MenuItem>
        <MenuItem value="unknown">Desconhecido</MenuItem>
      </Select>
    </FormControl>

    {/* SPECIES */}
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: 'white', fontSize:"1.2em",borderColor:"white" }}>Especies</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={species}
        label="species"
        onChange={(e)=>setSpecies(e.target.value)}
        style={{ color:"white"}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Human">Humano</MenuItem>
        <MenuItem value="Alien">Alien</MenuItem>
        <MenuItem value="unknown">Desconhecido</MenuItem>
      </Select>
    </FormControl>
    </>
  );
}