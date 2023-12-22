

const Identificacao = () => {
  return (
    <>
      <div className="campo-input">
        <label htmlFor="nome">Nome</label>
        <input id='nome' type="text" placeholder='Digite o seu nome' required/>
      </div>
      <div className="campo-input">
        <label htmlFor="email">E-mail</label>
        <input id='email' type="email" placeholder='Digite o seu email' required/>
      </div>
    </>
  )
}

export default Identificacao