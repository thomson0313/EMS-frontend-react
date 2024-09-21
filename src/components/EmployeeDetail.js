import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/axios"; // Import the axios instance

const EmployeeDetail = () => {
  const { id } = useParams(); // Get employeeId from the URL
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get(`/employees/${id}`); // Fetch the employee by ID
        setEmployee(response.data);
      } catch (error) {
        console.error(
          "Error fetching employee:",
          error.response ? error.response.data.message : error.message
        );
        setError(
          error.response
            ? error.response.data.message
            : "Error fetching employee"
        );
      }
    };

    fetchEmployee();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{employee.email}</td>
          </tr>
          <tr>
            <th>Job Title</th>
            <td>{employee.jobTitle}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{employee.department}</td>
          </tr>
          <tr>
            <th>Hire Date</th>
            <td>{new Date(employee.hireDate).toLocaleDateString()}</td>
          </tr>
          <tr>
            <th>Contact Information</th>
            <td>{employee.contactInformation}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetail;
