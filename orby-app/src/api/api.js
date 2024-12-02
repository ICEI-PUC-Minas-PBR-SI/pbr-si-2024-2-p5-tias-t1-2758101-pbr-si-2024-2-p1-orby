import axios from "axios";

/* const api = axios.create({
  baseURL: "http://ec2-54-82-184-49.compute-1.amazonaws.com/api",
}); */

const api = axios.create({
  baseURL: "http://192.168.100.186:5002",
});

export default api;
