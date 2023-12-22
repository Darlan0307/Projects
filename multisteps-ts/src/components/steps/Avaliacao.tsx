import { FaFrown,FaSmile,FaMeh,FaGrinHearts } from "react-icons/fa"

type userData ={
  dataForm:{
    feeling:string,
    comentario:string
  }
  updateDataForm:(key:string,value:string) => any
}

const Avaliacao = ({dataForm,updateDataForm}:userData) => {
  return (
    <div className="avaliacao">
      <div className="container-feeling">
      <div>
        <input type="radio" name="feeling" id='insatisfeito' value="insatisfeito" required
        checked={dataForm.feeling == 'insatisfeito' ? true : false }
        onChange={(e)=>updateDataForm("feeling",e.target.value)}
        />
        <label htmlFor="insatisfeito">
          <FaFrown/>
        </label>
        <span>Insatisfeito</span>
      </div>
      <div>
        <input type="radio" name="feeling" id="pouco_satisfeito" value="pouco_satisfeito" required
        checked={dataForm.feeling == 'pouco_satisfeito' ? true : false }
        onChange={(e)=>updateDataForm("feeling",e.target.value)}
        />
        <label htmlFor="pouco_satisfeito">
          <FaMeh/>
        </label>
        <span>Podia ser melhor</span>
      </div>
      <div>
        <input type="radio" name="feeling" id="satisfeito" value="satisfeito" required
        checked={dataForm.feeling == 'satisfeito' ? true : false }
        onChange={(e)=>updateDataForm("feeling",e.target.value)}
        />
        <label htmlFor="satisfeito">
          <FaSmile/>
        </label>
        <span>Satisfeito</span>
      </div>
      <div>
        <input type="radio" name="feeling" id="muito_satisfeito" value="muito_satisfeito" required
        checked={dataForm.feeling == 'muito_satisfeito' ? true : false }
        onChange={(e)=>updateDataForm("feeling",e.target.value)}
        />
        <label htmlFor="muito_satisfeito">
          <FaGrinHearts/>
        </label>
        <span>Muito Satisfeito</span>
      </div>
      </div>
      <div className="comment">
        <label htmlFor="comentario">Comentario</label>
        <textarea name="comentario" id="comentario" placeholder="Fala sobre oque achou dos nossos produtos" required
        value={dataForm.comentario || ""}
        onChange={(e)=>updateDataForm("comentario",e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default Avaliacao