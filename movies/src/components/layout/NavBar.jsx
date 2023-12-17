import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa' 

const NavBar = () => {
  return (
    <header>
        <Link to="/" className='link'>
            <h1>MOVIES</h1>
        </Link>

        <div className='container_query'>
            <input type="text" placeholder='ex: Batman' className='input_query'/>
            <button className='button'>
                <FaSearch/>
            </button>
        </div>
    </header>
  )
}

export default NavBar