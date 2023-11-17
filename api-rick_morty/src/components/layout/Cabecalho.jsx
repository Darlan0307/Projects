import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'

import './Layout.css'

const Cabecalho = () => {
  return (
    <header className='cabecalho'>
      
      <Link to="/"><img src={Logo} alt="Logo"/></Link>

      <h1>Rick and Morty <span>API</span></h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  )
}

export default Cabecalho