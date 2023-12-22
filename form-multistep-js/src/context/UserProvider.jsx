import { useState } from "react";
import { UserContext } from "./UserContext";


export const UserProvider = ({children}) => {

    const [userInfo,setUserInfo] = useState({
        nome: "",
        email: "",
        sentimento:"",
        comentario:"",
    })

    const handleUser = (key,value) => {
        setUserInfo({
            ...userInfo,[key]: value
        })
    }

    return(
        <UserContext.Provider value={{userInfo,handleUser}}>
            {children}
        </UserContext.Provider>
    )
}
