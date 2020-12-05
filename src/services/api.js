import axios from "axios";

const api = axios.create({
  // baseURL: "http://10.1.1.62:3333",
  baseURL: "http://192.168.1.21:3333",
});

export default api;
