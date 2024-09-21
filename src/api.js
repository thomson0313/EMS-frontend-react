import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/employees`;

export const fetchEmployees = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createEmployee = async (employee) => {
    const response = await axios.post(API_URL, employee);
    return response.data;
};

export const updateEmployee = async (id, employee) => {
    const response = await axios.put(`${API_URL}/${id}`, employee);
    return response.data;
};

export const deleteEmployee = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
