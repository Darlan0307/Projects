import {FaUser,FaStar,FaPaperPlane} from 'react-icons/fa'

type index = {
    indexCurrentStep:number
}

const IconsStep = ({indexCurrentStep}:index) => {
  return (
    <div className='container-icons'>
        <div className='icon active'>
            <FaUser/>
            <span>Identificação</span>
        </div>
        <div className={`icon ${indexCurrentStep >= 1 ? "active" : ""}`} >
            <FaStar/>
            <span>Avaliação</span>
        </div>
        <div className={`icon ${indexCurrentStep >= 2 ? "active" : ""}`}>
            <FaPaperPlane/>
            <span>Envio</span>
        </div>
    </div>
  )
}

export default IconsStep