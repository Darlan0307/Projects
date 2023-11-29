import React from 'react'

const SelectZona = ({fusosHorarios, adicionarZona, limparZonas}) => {
  return (
    <div>
        <select 
        onChange={adicionarZona}
        >
            <option value="" >Selecione</option>
            {fusosHorarios.map((fuso)=>(
                <option key={fuso} value={fuso}>{fuso}</option>
            ))}
        </select>

        <button onClick={limparZonas} style={{ marginLeft:"1em" }}>Limpar</button>
    </div>
  )
}

export default SelectZona