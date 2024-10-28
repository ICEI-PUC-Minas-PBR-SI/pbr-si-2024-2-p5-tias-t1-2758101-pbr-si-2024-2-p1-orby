import api from "../api/api";
import { saveToken } from "./tokenService";
import * as SecureStore from "expo-secure-store";

export const signin = async (userData) => {
  try {
    const response = await api.post("/signin", userData);
    saveToken(response.data);
    saveLoginState(true);
  } catch (error) {
    console.error("Erro ao fazer o login:", error);
    throw error;
  }
};

export const tokenSignin = async (token) => {
  try {
    const response = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Envia o token no cabeçalho Authorization
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer o login:", error);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post("/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer o cadastro:", error);
    throw error;
  }
};

export const saveLoginState = async (isLoggedIn) => {
  try {
    await SecureStore.setItemAsync("isLoggedIn", JSON.stringify(isLoggedIn));
  } catch (error) {
    console.error("Erro ao salvar estado de login");
    throw error;
  }
};

export const getLoginState = async () => {
  try {
    const isLoggedIn = await SecureStore.getItemAsync("isLoggedIn");
    return isLoggedIn;
  } catch (error) {
    console.error("Erro ao recuperar isLoggedIn");
    throw error;
  }
};
