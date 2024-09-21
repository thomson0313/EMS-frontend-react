import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await api.get("/employees");
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  // Function to handle deleting an employee
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await api.delete(`/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.jobTitle}</td>
              <td>
                <Link
                  to={`/employee/${employee._id}`}
                  className="btn btn-info me-2"
                >
                  Details
                </Link>
                <Link
                  to={`/edit/${employee._id}`}
                  className="btn btn-warning me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(employee._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
