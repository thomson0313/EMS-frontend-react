import axios from "axios";
import Cookies from "js-cookie";
import Config from "../config/const";

// Create an Axios instance
const api = axios.create({
  baseURL: Config.BASE_URL + "/api",
});

// Add a request interceptor to include the token in all protected routes
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
