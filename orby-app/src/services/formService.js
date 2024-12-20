import api from "../api/api";
import { getToken } from "./tokenService";

export const getForm = async (step, answers) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await api.post(`/form/step/${step}`, answers, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao obter o formulário:", error);
    throw error;
  }
};
