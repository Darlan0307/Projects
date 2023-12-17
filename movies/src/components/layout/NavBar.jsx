import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa' 

const NavBar = ({ setQuery, setActiveSearch }) => {

  const inputRef = useRef()
  const navigate = useNavigate()

  return (
    <header>
        <Link to="/" className='link'>
            <h1>MOVIES</h1>
        </Link>

        <div className='container_query'>
            <input 
            ref={inputRef}
            type="text" placeholder='ex: Batman' className='input_query'/>
            <button 
            onClick={()=> {
              navigate('/')
              setQuery(inputRef.current.value);
              setActiveSearch(true)
            }}
            className='button'>
                <FaSearch/>
            </button>
        </div>
    </header>
  )
}

export default NavBar