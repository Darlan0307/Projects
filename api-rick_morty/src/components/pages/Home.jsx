import React from 'react'

import Styles from './Home.module.css'
import CharacterCard from '../card/CharacterCard'
import SelectFiltre from '../select/SelectFiltre';

const Home = ({ dataCharacter, setIdOnclick, setGender, setSpecies, setStatus, gender, species, status }) => {
  return (
    <main className={Styles.container}>
      <h2>Filtros</h2>
      <section className={Styles.config}>
      <SelectFiltre setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} gender={gender} species={species} status={status}/>
        
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