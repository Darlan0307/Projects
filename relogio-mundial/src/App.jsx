import { useEffect, useState } from 'react';
import './App.css'
import ListZona from './components/ListZona'
import SelectZona from './components/SelectZona'

const fusosHorarios = [
  "UTC",
  "GMT",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Tokyo",
];

function App() {

  const zonaCurrent = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dataStorage = JSON.parse(localStorage.getItem("dataZonas")) || [];

  const [zonas,setZonas] = useState(dataStorage.length > 0 ? dataStorage : [zonaCurrent])

  const adicionarZona = (e) =>{
    const zona = e.target.value
    if(!zonas.includes(zona)){
      setZonas([...zonas,zona]);
    }
  }

  const limparZonas = ()=>{
    setZonas([]);
  }

  useEffect(()=>{
    localStorage.setItem("dataZonas",JSON.stringify(zonas))
  },[zonas])


  return (
    <>
      <h1>Relógio Mundial</h1>
      <SelectZona fusosHorarios={fusosHorarios} adicionarZona={adicionarZona} limparZonas={limparZonas}/>
      <ListZona zonas={zonas}/>
    </>
  )
}

export default App
