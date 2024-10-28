import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getLoginState,
  saveLoginState,
  tokenSignin,
} from "../services/authService";
import { getToken } from "../services/tokenService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        await tokenSignin(token);
        loadAuthState();
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Erro", error);
      }
    };

    const loadAuthState = async () => {
      try {
        const storedLoginState = await getLoginState();
        const parsedLoginState = storedLoginState
          ? JSON.parse(storedLoginState)
          : false;
        setIsLoggedIn(parsedLoginState);
      } catch (error) {
        console.error("Erro ao carregar o estado de login:", error);
        setIsLoggedIn(false);
      } finally {
        setHasLoaded(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const saveAuthState = async () => {
      if (hasLoaded) {
        try {
          await saveLoginState(isLoggedIn);
        } catch (error) {
          console.error("Erro ao salvar o estado de login:", error);
        }
      }
    };

    saveAuthState();
  }, [isLoggedIn, hasLoaded]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
