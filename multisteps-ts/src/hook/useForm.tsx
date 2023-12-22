import { FormEvent, ReactElement, useState } from "react";

export const useForm = (allSteps : ReactElement[]) => {

    const [indexCurrentStep,setIndexCurrentStep] = useState(0)

    const changeStep = (index:number,evento?:FormEvent) => {
        if(evento)evento.preventDefault()

        setIndexCurrentStep(index)
    }

    return{
        indexCurrentStep,
        currentSep : allSteps[indexCurrentStep],
        changeStep,
        lastStep: indexCurrentStep  == allSteps.length - 1 ? true : false
    }

}




