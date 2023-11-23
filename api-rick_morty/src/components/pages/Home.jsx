import React from 'react'

import Styles from './Home.module.css'
import CharacterCard from '../card/CharacterCard'
import SelectFiltre from '../select/SelectFiltre';
import SearchIcon from '@mui/icons-material/Search';

const Home = ({ dataCharacter, setIdOnclick, setGender, setSpecies, setStatus, gender, species, status, setAtivandoBusca, setName }) => {
  return (
    <main className={Styles.container}>
      <h2>Filtros</h2>
      <section className={Styles.config}>
        <div className={Styles.input_name}>
          <input 
          onChange={(e)=>setName(e.target.value)}
          type="text" placeholder='Nome do personagem'/>
          <button
          onClick={()=>{
            setAtivandoBusca(prevState => !prevState)
            console.log(dataCharacter);
          }}
          ><SearchIcon/></button>
        
        </div>
      <SelectFiltre setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} gender={gender} species={species} status={status}/>
        <button className={Styles.reset}
        onClick={()=>{
          setGender('');
          setName('');
          setSpecies('');
          setStatus('');
        }}
        >Limpar Filtros</button>
      </section>
      <h2>Personagens</h2>
      <section className={Styles.cards}>
        {dataCharacter.length > 0 ? dataCharacter.map((character,index)=>(
          
          <CharacterCard key={index} character={character} setIdOnclick={setIdOnclick}/>
        )) : <h3>Nenhum personagem encontrado.</h3>}      
        
      </section>
    </main>
  )
}

export default Home