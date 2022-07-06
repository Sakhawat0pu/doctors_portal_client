import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allElement = useFirebase();
  return (
    <AuthContext.Provider value={allElement}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
