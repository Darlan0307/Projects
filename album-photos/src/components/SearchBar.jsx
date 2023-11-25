import React from 'react'

const SearchBar = ({setQuery, setCategory, setActiveSearch}) => {

  const categorias = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes",
  ];

  return (
    <div className='search-bar'>
      <input 
      onChange={(e)=>setQuery(e.target.value)}
      type="text" placeholder='Pesquise oque deseja'/>
      <button
      onClick={()=>setActiveSearch(true)}
      >Pesquisar</button>
      <select
      onChange={(e)=>{
        setCategory(e.target.value)
        // setActiveSearch(true);
      }}
      
      >
        <option value="">Todas Categorias</option>
        {categorias.map((categoria)=>(
          <option key={categoria} value={categoria}>{categoria}</option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar