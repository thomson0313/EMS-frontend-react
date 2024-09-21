import React from 'react';
import { deleteEmployee } from '../api';

const EmployeeList = ({ employees, fetchEmployees }) => {
    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    return (
        <ul>
            {employees.map((employee) => (
                <li key={employee._id}>
                    {employee.name} - {employee.jobTitle} - {employee.department}
                    <button onClick={() => handleDelete(employee._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default EmployeeList;
