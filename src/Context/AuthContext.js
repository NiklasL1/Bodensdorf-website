import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [data, setData] = useState(null)
    
    return (
        <AuthContext.Provider value={{ 
            data,
            setData
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
