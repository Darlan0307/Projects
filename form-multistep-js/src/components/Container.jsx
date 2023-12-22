import React from 'react'
import StepIcons from './StepIcons'
import UserForm from './UserForm'
import ReviewForm from './ReviewForm'
import Thanks from './Thanks'
import Step from './Step'
import {useForm} from '../hook/useForm'
import { toast } from "react-toastify";


const Container = () => {

  const formComponents = [
    <UserForm/>,
    <ReviewForm/>,
    <Thanks/>
]

  const {currentStep,currentComponent,nextStep,previousStep,lastStep} = useForm(formComponents)

    
  const handleSend = () =>{
    toast.success("Enviado com sucesso")
    setTimeout(()=>{

      window.location.reload()
    },2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='container_inputs' onSubmit={handleSubmit}>
        <StepIcons currentStep={currentStep}/>
        <Step step={currentComponent}/>
        <div className='all-buttons'>
        {currentStep >= 1 &&
          <button
          className='button'
          onClick={previousStep}
          >Voltar</button>
        }
        {
          lastStep ? (
            <button className='button'
            onClick={handleSend}
            >Enviar</button>
          ):(
            <button
            className='button'
            onClick={nextStep}
            type='submit'
            >Avançar</button>
          )
        }
        </div>
        
    </form>
  )
}

export default Container