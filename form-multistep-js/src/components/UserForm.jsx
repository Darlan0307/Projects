import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UserForm = () => {

  const {userInfo,handleUser} = useContext(UserContext)

  return (
    <div className="userform">
      <div>
        <label htmlFor="nome">Nome</label>
        <input name='nome' type="text" placeholder='Digite o seu nome' required
        value={userInfo.nome || ""}
        onChange={(e)=>handleUser("nome",e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input name='email' type="email" placeholder='Digite o seu email' required
        value={userInfo.email || ""}
        onChange={(e)=>handleUser("email",e.target.value)}
        />
      </div>
    </div>
  )
}

export default UserForm