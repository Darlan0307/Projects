import Identificacao from "./steps/Identificacao"
import Avaliacao from "./steps/Avaliacao"
import Envio from "./steps/Envio"
import { useForm } from "../hook/useForm"
import IconsStep from "./IconsStep"


const allSteps = [
    <Identificacao/>,
    <Avaliacao/>,
    <Envio/>
]

const Form = () => {

    const {indexCurrentStep, currentSep, changeStep, lastStep} = useForm(allSteps)


  return (
    <div className="container">
        <IconsStep indexCurrentStep={indexCurrentStep}/>
        <form onSubmit={(e)=>changeStep(indexCurrentStep + 1,e)}>
            <div className="current-step">
                {currentSep}
            </div>
            <div className="actions">
                {indexCurrentStep >= 1 && (
                    <button 
                    type='button'
                    onClick={()=>changeStep(indexCurrentStep - 1)}
                    >Voltar</button>
                )}
                
                {lastStep ? (
                    <button className="send" type="button">Enviar</button>
                ):(
                    <button type='submit'>Avançar</button>
                )}
                
            </div>
        </form>
    </div>
  )
}

export default Form