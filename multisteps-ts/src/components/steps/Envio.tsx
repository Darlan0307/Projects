import { ReactElement } from "react"
import { FaFrown,FaSmile,FaMeh,FaGrinHearts } from "react-icons/fa"

type userData = {
  dataForm:{
    nome: string,
    feeling:string,
    comentario:string
  }
}

type iconType = {
  "insatisfeito":ReactElement,
  "pouco_satisfeito":ReactElement,
  "satisfeito":ReactElement,
  "muito_satisfeito":ReactElement
}

const allIcons:iconType = {
  "insatisfeito":<FaFrown/>,
  "pouco_satisfeito":<FaMeh/>,
  "satisfeito":<FaSmile/>,
  "muito_satisfeito":<FaGrinHearts/>
}

const Envio = ({dataForm}:userData) => {
  return (
    <div className="envio">
      <h2>Quase pronto {dataForm.nome}</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia atque veritatis ratione est similique quam consequatur cumque dolorum esse. Asperiores!</p>
      <p><span>Review: </span>{allIcons[dataForm.feeling as keyof iconType]}</p>
      <p><span>Comentario: </span>{dataForm.comentario}</p>
    </div>
  )
}

export default Envio