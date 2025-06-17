import React, { FC, createContext, useContext, useEffect } from "react";
import { router, Router } from "expo-router";

const AuthContext = createContext({});

type AuthContextType = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthContextType) => {
  useEffect(() => {
    router.replace("/profile");
  }, []);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
