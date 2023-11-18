import React from 'react'

import Styles from './Home.module.css'
import CharacterCard from '../card/CharacterCard'

const Home = ({ dataCharacter, setIdOnclick }) => {
  return (
    <main className={Styles.container}>
      <section className={Styles.config}>
        <h2>Personagens</h2>
        
      </section>
      <div className={Styles.cards}>

        {dataCharacter ? dataCharacter.map((character)=>(
          <CharacterCard key={character.id} character={character} setIdOnclick={setIdOnclick}/>
        )) : <h3>Carregando...</h3>}      
        
      </div>
    </main>
  )
}

export default Home