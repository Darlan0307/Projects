import { FaFrown,FaSmile,FaMeh,FaGrinHearts } from "react-icons/fa"

const Avaliacao = () => {
  return (
    <div className="avaliacao">
      <div className="container-feeling">
      <div>
        <input type="radio" name="feeling" id='insatisfeito' value="insatisfeito" required/>
        <label htmlFor="insatisfeito">
          <FaFrown/>
        </label>
        <span>Insatisfeito</span>
      </div>
      <div>
        <input type="radio" name="feeling" id="pouco_satisfeito" value="pouco_satisfeito" required/>
        <label htmlFor="pouco_satisfeito">
          <FaMeh/>
        </label>
        <span>Podia ser melhor</span>
      </div>
      <div>
        <input type="radio" name="feeling" id="satisfeito" value="satisfeito" required/>
        <label htmlFor="satisfeito">
          <FaSmile/>
        </label>
        <span>Satisfeito</span>
      </div>
      <div>
        <input type="radio" name="feeling" id="muito_satisfeito" value="muito_satisfeito" required/>
        <label htmlFor="muito_satisfeito">
          <FaGrinHearts/>
        </label>
        <span>Muito Satisfeito</span>
      </div>
      </div>
      <div className="comment">
        <label htmlFor="comentario">Comentario</label>
        <textarea name="comentario" id="comentario" placeholder="Fala sobre oque achou dos nossos produtos" required></textarea>
      </div>
    </div>
  )
}

export default Avaliacao