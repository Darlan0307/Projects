import React from 'react'
import {FaUser,FaStar,FaPaperPlane} from 'react-icons/fa'

const StepIcons = ({currentStep}) => {
  return (
    <div className='icons-steps'>
     
        <div className='active'>
            <FaUser/>
            <span>Identificação</span>
        </div>
        <div className={currentStep >= 1 ? 'active' : 'nan'} >
            <FaStar/>
            <span>Avaliação</span>
        </div>
        <div className={currentStep >= 2 ? 'active': 'nan'}>
            <FaPaperPlane/>
            <span>Enviar</span>
        </div>
      
    </div>
  )
}

export default StepIcons