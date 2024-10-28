import api from "../api/api";
import { getToken } from "./tokenService";

export const getThreads = async () => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await api.get("/forum/threads", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao obter tópicos:", error);
    throw error;
  }
};

export const createTopic = async (topicData) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await api.post("/forum/thread", topicData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao criar tópico:", error);
    throw error;
  }
};

export const changeTopic = async (topicId, topicData) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await api.put(`/forum/${topicId}`, topicData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar tópico:", error);
    throw error;
  }
};

export const createReplie = async (threadId, replieData) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await api.post(`/forum/${threadId}/replie`, replieData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao criar comentário:", error);
    throw error;
  }
};

export const getTopic = async (topicId) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await api.get(`/forum/${topicId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao obter tópicos:", error);
    throw error;
  }
};
