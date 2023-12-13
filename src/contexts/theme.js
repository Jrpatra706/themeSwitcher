import { createContext, useContext } from "react";

// we can pass default value to createContext
export const ThemeContext = createContext({
    // by default our theme will be light
    themeMode:'light',
    // these functions will be filled later
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});

export const ThemeProvider = ThemeContext.Provider
// const UserContextProvider = ({children}) =>{
//     return(
//         <UserContext.Provider >
//             {children}
//         </UserContext.Provider>
//     )
// }
// we don't have to pass the children inside provider, will directly write provider by covering children 

export default function useTheme(){
    return useContext(ThemeContext);
    // by this we don't have to import  useContext & context(i.e UserContext) differently
//     import React, { useContext } from 'react'
// import UserContext from '../context/UserContext';
}