import Cookies from "js-cookie";
import api from "./axios";
import Config from "../config/const";

// Sign Up
const register = async (userData) => {
  const { data } = await api.post(
    Config.BASE_URL + "/api/auth/register",
    userData
  );
  return data;
};

// Login
const login = async (credentials) => {
  const { data } = await api.post(
    Config.BASE_URL + "/api/auth/login",
    credentials
  );
  // Store the token in a cookie
  Cookies.set("token", data.token);
  return data;
};

// Logout
const logout = () => {
  Cookies.remove("token"); // Remove token from cookies
};

export { register, login, logout };
