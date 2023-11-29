import React from 'react'
import TimeZone from './TimeZone'

const ListZona = ({ zonas }) => {
  return (
    <div>
        {zonas.length > 0 ? zonas.map((zona)=>(
            <TimeZone key={zona} zona={zona}/>
        )) : <p>Selecione uma zona</p>}
    </div>
  )
}

export default ListZona