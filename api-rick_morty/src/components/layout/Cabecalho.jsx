import React from 'react'
import { Link } from 'react-router-dom'

const Cabecalho = () => {
  return (
    <header>
      
      <h1>titulo</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  )
}

export default Cabecalho