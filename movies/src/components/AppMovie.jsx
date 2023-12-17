import React, { useEffect, useState } from 'react'
import NavBar from './layout/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'

const AppMovie = () => {
    // States
    const [movies,setMovies] = useState([])
    const [query, setQuery] = useState('')
    const [activeSearch,setActiveSearch] = useState(false)
    

    // Variaveis do ambiente
    const apikey = import.meta.env.VITE_API_KEY;
    const urlbase = import.meta.env.VITE_URL_TOP_MOVIE;
    const urlsearch = import.meta.env.VITE_URL_SEARCH;
    const urlimage = import.meta.env.VITE_URL_IMAGE;


    // Funcao que faz a requisicao na api com base em uma url
    
    const fetchData= async (url) =>{
        try{
            const response = await fetch(url)
            const data = await response.json()
            setMovies(data.results);
            // console.log(data);
        }catch(err){
            console.log("ERROR:",err);
        }
        
    }


    useEffect(()=>{
        fetchData(`${urlbase}top_rated?${apikey}`)
    },[])

    useEffect(()=>{      
        if(activeSearch && query){
            let newURL = `${urlsearch}?${apikey}&query=${query}`
            fetchData(newURL)
            console.log(movies);
            setActiveSearch(false)
        }
    },[query,activeSearch])


  return (
    <div>
        <NavBar setQuery={setQuery} setActiveSearch={setActiveSearch}/>
        <Routes>
            <Route index element={<Home movies={movies} urlimage={urlimage} query={query}/>} />
            <Route path='/movie/:id' element={<SingleMovie movies={movies} urlimage={urlimage}/>}/>
        </Routes>
    </div>
  )
}

export default AppMovie