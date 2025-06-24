import { createContext } from "react";
//create context
export const UserContext=createContext();

//context Provider
export const UserProvider=({children})=>{
    const name='Mohamed Athik R'
    return(
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider>
    )
}