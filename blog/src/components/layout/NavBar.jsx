import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='cabecalho'>
        <Link to="/" className='logo'><h1>BLOG</h1></Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/newpost" className='link_especial'>Novo Post</Link>
            <Link to="/gerenciar">Gerenciar</Link>
        </nav>
    </header>
  )
}

export default NavBar