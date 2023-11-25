import { useEffect, useState } from "react"
import AlbumFotos from "./components/AlbumFotos"
import FotoAmpliada from "./components/FotoAmpliada"
import SearchBar from "./components/SearchBar"
import axios from "axios";

function App() {

  const [fotos,setFotos] = useState([]);
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("");
  const [fotoAmpliada,setFotoAmpliada] = useState(null);
  const [activeSearch,setActiveSearch] = useState(false);

  const fetchData = async ({query, category}) => {

    const apiKey = import.meta.env.VITE_API_KEY || "";

    if(query || category){
      let searchQuery = query;

      if(query && category){
        searchQuery = `${query} ${category}`
      }else if(category){
        searchQuery = query;
      }

      try{
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query: searchQuery,
              client_id: apiKey,
            },
          }
        );
        if (response.status === 200 && response.data && response.data.results) {
          setFotos(response.data.results);
        }
      }catch(err){
        console.log("ERRO:",err);
      }

      return;
    }

    try{
      const response = await axios.get(`https://api.unsplash.com/photos/random`,{
        params: {
          client_id: apiKey,
          count: 30,
        },
      })
      
      if (response.status === 200 && response.data) {
        setFotos(response.data);
      }

    }catch(err){
      console.log("ERROR:",err);
    }

  }

  useEffect(()=>{
    fetchData({query, category});
  },[])

  useEffect(()=>{
    if(activeSearch){
      fetchData({query,category});
      setActiveSearch(false);
    }
  },[activeSearch])

  return (
    <div className="container">
      <SearchBar
      setQuery={setQuery}
      setCategory={setCategory}
      setActiveSearch={setActiveSearch}
      />
      <AlbumFotos
      fotos={fotos}
      setFotoAmpliada={setFotoAmpliada}
      />
      {fotoAmpliada && <FotoAmpliada fotoAmpliada={fotoAmpliada} setFotoAmpliada={setFotoAmpliada}/>}
      
    </div>
  )
}

export default App
