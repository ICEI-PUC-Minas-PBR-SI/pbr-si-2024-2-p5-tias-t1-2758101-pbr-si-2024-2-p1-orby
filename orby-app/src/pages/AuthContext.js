import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getLoginState,
  saveLoginState,
  tokenSignin,
} from "../services/authService";
import { getToken } from "../services/tokenService";

// Criando o contexto
const AuthContext = createContext();

// Provider que fornecerá o estado de autenticação
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        if (storedLoginState !== null) {
          setIsLoggedIn(JSON.parse(storedLoginState));
        } else {
          setIsLoggedIn(false); // Caso não haja valor salvo, o usuário não está logado
        }
      } catch (error) {
        console.error("Erro ao carregar o estado de login:", error);
        setIsLoggedIn(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const saveAuthState = async () => {
      try {
        if (isLoggedIn !== null) {
          // Evita salvar null no início
          await saveLoginState(isLoggedIn);
        }
      } catch (error) {
        console.error("Erro ao salvar o estado de login:", error);
      }
    };

    saveAuthState();
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);
