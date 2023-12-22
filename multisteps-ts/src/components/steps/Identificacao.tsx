type userData = {
  dataForm:{
    nome:string,
    email:string
  },
  updateDataForm: (key:string,value:string) => any
}

const Identificacao = ({dataForm, updateDataForm}:userData) => {
  return (
    <>
      <div className="campo-input">
        <label htmlFor="nome">Nome</label>
        <input 
        id='nome' 
        type="text" 
        placeholder='Digite o seu nome' 
        required
        value={dataForm.nome || ""}
        onChange={(e)=>updateDataForm("nome",e.target.value)}
        />
      </div>
      <div className="campo-input">
        <label htmlFor="email">E-mail</label>
        <input id='email' type="email" placeholder='Digite o seu email' required
        value={dataForm.email || ""}
        onChange={(e)=>updateDataForm("email",e.target.value)}
        />
      </div>
    </>
  )
}

export default Identificacao