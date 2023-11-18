import React from 'react'

import Styles from './Home.module.css'
import CharacterCard from '../card/CharacterCard'
import SelectFiltre from '../select/SelectFiltre';

const Home = ({ dataCharacter, setIdOnclick, setGender, setSpecies, setStatus }) => {
  console.log(dataCharacter);
  return (
    <main className={Styles.container}>
      <section className={Styles.config}>
        <SelectFiltre setGender={setGender} setSpecies={setSpecies} setStatus={setStatus}/>
        
      </section>
      <div className={Styles.cards}>
        {dataCharacter.length > 0 ? dataCharacter.map((character,index)=>(
          
          <CharacterCard key={index} character={character} setIdOnclick={setIdOnclick}/>
        )) : <h3>Nenhum personagem encontrado.</h3>}      
        
      </div>
    </main>
  )
}

export default Home