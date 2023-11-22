import React, { useEffect, useState } from 'react'

const siglaIdiomas = [
    { id: 1, sigla: 'en', nome: 'Inglês' },
    { id: 2, sigla: 'es', nome: 'Espanhol' },
    { id: 4, sigla: 'fr', nome: 'Francês' },
    { id: 5, sigla: 'de', nome: 'Alemão' },
    { id: 6, sigla: 'it', nome: 'Italiano' },
    { id: 7, sigla: 'ja', nome: 'Japonês' },
    { id: 8, sigla: 'zh', nome: 'Chinês' },
    { id: 9, sigla: 'ru', nome: 'Russo' },
    { id: 10, sigla: 'ar', nome: 'Árabe' },
  ];

const Citacoes = ({ texto, autor}) => {
    const [idioma,setIdioma] = useState("");
    const [traducao,setTraducao] = useState("");

    const quoteTranslation = async () => {
        try{
            const response = await fetch("https://libretranslate.de/translate",{
                method: "POST",
                body: JSON.stringify({
                    q: texto,
                    source: "pt",
                    target: idioma,
                }),
                headers: {"Content-Type": "application/json"},
            })
            

            const data = await response.json();

            setTraducao(data.translatedText);
        }catch(err){
            console.log("Erro ao traduzir.");
        }
    }

    useEffect(()=>{
        setTraducao("");
    },[texto])

  return (
    <div>
    <blockquote>
        <p className='blockquote '>{traducao ? traducao : texto}</p>
        <footer className='blockquote-footer mt-2'>{autor}</footer>
    </blockquote>
    <h3>Traduza para outro idioma</h3> <br />
    <select 
    onChange={(e) => setIdioma(e.target.value)}
    >
        <option value="pt">Português</option>
        {siglaIdiomas.map((sigla)=>(
            <option key={sigla.id} value={sigla.sigla}>{sigla.nome}</option>
        ))}
    </select><br /> <br />
    <button 
    onClick={quoteTranslation}
    className='btn btn-primary m-1' >Traduzir</button>
    
    </div>
  )
}

export default Citacoes