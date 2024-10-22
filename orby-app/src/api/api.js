import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-44-208-33-31.compute-1.amazonaws.com:5002",
});

export default api;
