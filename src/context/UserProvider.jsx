import React, { createContext,useState } from "react";
const UserContext = createContext(null);
const UserProvider = ({children})=>{
    const [display,setDisplay] = useState([]);
    return (
        <UserContext.Provider value={{display,setDisplay}}>
            {children}
        </UserContext.Provider>
    );

};
export {UserProvider,UserContext};