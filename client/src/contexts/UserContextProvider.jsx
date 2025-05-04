import React,{useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
     const [username,setUsername] = useState();

     return(
        <UserContext.Provider value={{username,setUsername}}>
            {children}
        </UserContext.Provider>
     )
}

export default UserContextProvider
