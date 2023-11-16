import React from 'react'
import './index.css'

const SelectRest = ({ rates, Currency, setCurrency }) => {
  return (
    <select 
    className='select_rest' 
    value={Currency}
    onChange={(e) => setCurrency(e.target.value)}
    >

      {Object.keys(rates).map((currency)=>(
        <option key={currency} value={currency}>{currency}</option>
      ))}
    </select>
  )
}

export default SelectRest