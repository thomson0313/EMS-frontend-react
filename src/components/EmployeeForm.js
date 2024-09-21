import React, { useState } from 'react';
import { createEmployee } from '../api';

const EmployeeForm = ({ fetchEmployees }) => {
    const [employee, setEmployee] = useState({ name: '', email: '', jobTitle: '', department: '', hireDate: '', contactInfo: '' });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createEmployee(employee);
        fetchEmployees();
        setEmployee({ name: '', email: '', jobTitle: '', department: '', hireDate: '', contactInfo: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
            <input name="jobTitle" value={employee.jobTitle} onChange={handleChange} placeholder="Job Title" required />
            <input name="department" value={employee.department} onChange={handleChange} placeholder="Department" required />
            <input name="hireDate" type="date" value={employee.hireDate} onChange={handleChange} required />
            <input name="contactInfo" value={employee.contactInfo} onChange={handleChange} placeholder="Contact Info" required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
