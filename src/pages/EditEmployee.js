import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/axios";
import EmployeeForm from "../components/EmployeeForm";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await api.get(`/employees/${id}`);
      setEmployee(response.data);
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div>
      <h2>Edit Employee</h2>
      <EmployeeForm employee={employee} refreshEmployees={() => {}} />{" "}
      {/* No need for refresh function here */}
    </div>
  );
};

export default EditEmployee;
