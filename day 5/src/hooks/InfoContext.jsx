import {createContext, useContext, useState} from 'react';
export const InfoContext = createContext();
export const InfoProvider = ({children}) => {
    const User = {name:'Athik',age:40,dep:'IT'}

    return (
        <InfoContext.Provider value={{User}}>
            {children}
        </InfoContext.Provider>
    );
};