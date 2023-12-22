import React, { useContext } from 'react'
import {FaSmile,FaFrown,FaMeh,FaGrinHearts} from 'react-icons/fa'
import { UserContext } from '../context/UserContext'


const Thanks = () => {

  const fellings = {
    "insatisfeito":<FaFrown/>,
    "pouco_satisfeito":<FaMeh/>,
    "satisfeito":<FaSmile/>,
    "muito_satisfeito":<FaGrinHearts/>
  }

  const {userInfo} = useContext(UserContext)

  return (
    <div className='thanks'>
      <h2>Falta pouco...</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta veritatis, voluptate magnam quae minima.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <p><span>Satisfação com o produto:</span>{fellings[userInfo.sentimento]}</p>
      <p><span>Comentario:</span>{userInfo.comentario}</p>
    </div>
  )
}

export default Thanks