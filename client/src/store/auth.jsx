import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("authToken"));
    const isLoggedIn = !!token;


    const storeToken = (token) => {
        setToken(token);
        return localStorage.setItem("authToken", token);
    }

    const logout = () => {
        setToken("");
        return localStorage.removeItem("authToken");
    }

    return <AuthContext.Provider value={{ token, setToken, storeToken, logout, isLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}