import React, { createContext, useState } from "react";

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    //Login Logout information
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
    }
    const authContextData = {
        isAuthenticated,
        toggleAuth
    };

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;