import Identificacao from "./steps/Identificacao"
import Avaliacao from "./steps/Avaliacao"
import Envio from "./steps/Envio"
import { useForm } from "../hook/useForm"
import IconsStep from "./IconsStep"
import { useState } from "react"




const Form = () => {
    type dataUserForm = {
        nome:string,
        email:string,
        feeling:string,
        comentario:string,
    }


    const [dataForm,setDataForm] = useState<dataUserForm>({
        nome:"",
        email:"",
        feeling:"",
        comentario:""
    })

    const updateDataForm = (key:string,value:string) => {
        setDataForm({...dataForm,[key]:value})   
    }


    const allSteps = [
        <Identificacao dataForm={dataForm} updateDataForm={updateDataForm}/>,
        <Avaliacao dataForm={dataForm} updateDataForm={updateDataForm}/>,
        <Envio dataForm={dataForm}/>
    ]

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
                    <button className="send" type="button"
                    onClick={()=>window.location.reload()}
                    >Enviar</button>
                ):(
                    <button type='submit'>Avançar</button>
                )}
                
            </div>
        </form>
    </div>
  )
}

export default Form