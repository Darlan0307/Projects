import React from 'react'

const FotoAmpliada = ({fotoAmpliada, setFotoAmpliada}) => {
  return (
    <div className='foto-ampliada-backdrop' onClick={()=>setFotoAmpliada(null)}>
      <div className='foto-ampliada-container'>
        <img src={fotoAmpliada.urls.regular} alt={dados.alt_description} />
      </div>
    </div>
  )
}

export default FotoAmpliada