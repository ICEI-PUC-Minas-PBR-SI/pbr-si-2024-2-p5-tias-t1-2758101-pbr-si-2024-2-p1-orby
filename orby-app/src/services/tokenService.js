import * as SecureStore from "expo-secure-store";

export const saveToken = async (token) => {
  try {
    await SecureStore.setItemAsync("authToken", token);
  } catch (error) {
    console.log("Erro ao salvar o token", error);
  }
};

export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("authToken");
    if (token) {
      return token;
    } else {
      console.log("Token não encontrado");
      return null;
    }
  } catch (error) {
    console.log("Erro ao recuperar o token", error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync("authToken");
  } catch (error) {
    console.log("Erro ao remover o token", error);
  }
};
