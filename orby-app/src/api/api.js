import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.56.1:5002",
});

export default api;
