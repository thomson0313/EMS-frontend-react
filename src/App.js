import React, { useEffect, useState } from 'react';
import { fetchEmployees } from './api';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
        const data = await fetchEmployees();
        setEmployees(data);
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div>
            <h1>Employee Management System</h1>
            <EmployeeForm fetchEmployees={getEmployees} />
            <EmployeeList employees={employees} fetchEmployees={getEmployees} />
        </div>
    );
};

export default App;
