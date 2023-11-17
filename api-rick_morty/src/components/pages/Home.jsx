import React from 'react'

import Styles from './Home.module.css'

const Home = () => {
  return (
    <main className={Styles.container}>
      <section className={Styles.config}>
        <h2>Personagens</h2>
        
      </section>
      <div className={Styles.cards}>
      <article>
        <h3>card1</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </article>
      <article>
        <h3>card1</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </article>
        
        
      </div>
    </main>
  )
}

export default Home