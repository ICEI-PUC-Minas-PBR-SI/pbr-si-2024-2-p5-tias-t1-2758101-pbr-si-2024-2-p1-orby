import api from "../api/api";

export const signin = async (userData) => {
  try {
    const response = await api.post("/signin", userData);
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
