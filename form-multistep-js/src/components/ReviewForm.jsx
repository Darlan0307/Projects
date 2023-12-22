import React, { useContext } from 'react'
import {FaSmile,FaFrown,FaMeh,FaGrinHearts} from 'react-icons/fa'
import { UserContext } from '../context/UserContext'

const ReviewForm = () => {

  const {userInfo,handleUser} = useContext(UserContext)

  return (
    <div className='review'>
      <div className='faces'>
        <div>
          <input type="radio" name="face" id='insatisfeito' value="insatisfeito"
          onClick={()=>handleUser("sentimento","insatisfeito")}
          />
          <label htmlFor="insatisfeito"><FaFrown/></label>
          <span>Insatisfeito</span>
        </div>
        <div>
          <input type="radio" name="face" id='pouco_satisfeito' value="pouco_satisfeito"
          onClick={()=>handleUser("sentimento","pouco_satisfeito")}
          />
          <label htmlFor="pouco_satisfeito"><FaMeh/></label>
          <span>Pouco Satisfeito</span>
        </div>
        <div>
          <input type="radio" name="face" id='satisfeito' value="satisfeito"
          onClick={()=>handleUser("sentimento","satisfeito")}
          />
          <label htmlFor="satisfeito"><FaSmile/></label>
          <span>Satisfeito</span>
        </div>
        <div>
          <input type="radio" name="face" id='muito_satisfeito' value="muito_satisfeito"
          onClick={()=>handleUser("sentimento","muito_satisfeito")}
          />
          <label htmlFor="muito_satisfeito"><FaGrinHearts/></label>
          <span>Muito Satisfeito</span>
        </div>
      </div>

      <div className='comment'>
        <label htmlFor="comentario">Comentario</label>
        <textarea name="comentario" id="comentario" placeholder='Conte oque achou do nosso serviço'
        value={userInfo.comentario || ""}
        onChange={(e)=>handleUser("comentario",e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm