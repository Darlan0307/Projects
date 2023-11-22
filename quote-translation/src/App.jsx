import { useState } from 'react'
import './App.css'
import citacoes from './data';
import Citacoes from './components/Citacoes';

function App() {

  const [index, setIndex] = useState(0);

  const nextQuote = () =>{
    setIndex(prevIndex => (prevIndex + 1) % citacoes.length);
  }

  return (
    <main style={{ maxWidth: "600px" }}>
      <h1 >Citação</h1>
      <Citacoes texto={citacoes[index].texto}  autor={citacoes[index].autor}/>
      <button onClick={nextQuote} className='btn btn-success mt-3'>Próxima citação</button>
    </main>
  )
}

export default App
