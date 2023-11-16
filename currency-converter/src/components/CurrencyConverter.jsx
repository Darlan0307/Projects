import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputForm from './InputForm'
import SelectRest from './SelectRest'
import PaidIcon from '@mui/icons-material/Paid';
import './index.css'
import axios from 'axios';

const CurrencyConverter = () => {

    const [rates,SetRates] = useState(null);
    const [fromCurrency,setFromCurrency] = useState("BRL");
    const [toCurrency,setToCurrency] = useState("EUR");
    const [amount,setAmount] = useState(1);
    const [convertedAmount,setConvertedAmount] = useState(null);

    useEffect(()=>{
        axios.get("https://v6.exchangerate-api.com/v6/33332548d2112393d3992002/latest/BRL")
        .then((response) => SetRates(response.data.conversion_rates))
        .catch((err)=>console.log("ERROR: " + err))
    },[])

    useEffect(()=>{

        if(rates){
            const rateFrom = rates[fromCurrency] || 0;
            const rateTo = rates[toCurrency] || 0;
            setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2))
        }

    },[amount,fromCurrency,toCurrency,rates])


    if(!rates){
        return <div>Carregando...</div>
    }

  return (
    <Container maxWidth="sx" className='container' sx={{ display:"flex",flexDirection:"column" }}>
        <h2>Conversor de moedas</h2>
        <InputForm amount={amount} setAmount={setAmount}/>
        <span>Selecione as moedas</span>
        <SelectRest rates={rates} Currency={fromCurrency} setCurrency={setFromCurrency}/>
        <span>Para</span>
        <SelectRest rates={rates} Currency={toCurrency} setCurrency={setToCurrency}/>
        <h3>Resultado <PaidIcon/> </h3>
        <p>{amount} {fromCurrency} valem {convertedAmount} {toCurrency}</p>
    </Container>
  )
}

export default CurrencyConverter