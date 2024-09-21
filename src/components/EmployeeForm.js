import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import api from "../services/axios";

const EmployeeForm = ({ employee, refreshEmployees }) => {
  const [formData, setFormData] = useState({
    name: employee ? employee.name : "",
    email: employee ? employee.email : "",
    jobTitle: employee ? employee.jobTitle : "",
    department: employee ? employee.department : "",
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employee) {
      await api.put(`/employees/${employee._id}`, formData);
    } else {
      await api.post("/employees", formData);
    }
    refreshEmployees(); // Call refresh function
    navigate("/dashboard"); // Redirect to dashboard after updating
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h3>{employee ? "Update Employee" : "Add Employee"}</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter employee email"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Enter job title"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Enter department"
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-block">
                    {employee ? "Update Employee" : "Add Employee"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
