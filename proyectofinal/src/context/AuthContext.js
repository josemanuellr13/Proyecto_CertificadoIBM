// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [userData, setUserData] = useState({ id: '', userName: 'e' });

  const login = () => {
    setIsAuthenticated(true);
  };

  const changeUserData = (datos) => {
    setUserData(datos)
  }

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout , userData, setUserData, changeUserData}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };