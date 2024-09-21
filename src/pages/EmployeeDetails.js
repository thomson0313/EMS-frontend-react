import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/axios"; // Import your axios instance

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const fetchEmployee = async () => {
      const { data } = await api.get(`/employees/${id}`);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">{employee.name}'s Details</h2>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Email:</strong>
              <p>{employee.email}</p>
            </div>
            <div className="col-md-6">
              <strong>Job Title:</strong>
              <p>{employee.jobTitle}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Department:</strong>
              <p>{employee.department}</p>
            </div>
            <div className="col-md-6">
              <strong>Hire Date:</strong>
              <p>{new Date(employee.hireDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          <button
            className="btn btn-secondary"
            onClick={() => window.history.back()}
          >
            Back to Employee List
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
