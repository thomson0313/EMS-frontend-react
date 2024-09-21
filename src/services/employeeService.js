import axios from "axios";
import Config from "../config/const";
const API_URL = Config.BASE_URL + "/api/employees/";

const getEmployees = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

const createEmployee = async (employeeData) => {
  const { data } = await axios.post(API_URL, employeeData);
  return data;
};

const updateEmployee = async (id, employeeData) => {
  const { data } = await axios.put(`${API_URL}${id}`, employeeData);
  return data;
};

const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}${id}`);
};

export { getEmployees, createEmployee, updateEmployee, deleteEmployee };
