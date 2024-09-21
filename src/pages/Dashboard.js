import React, { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshEmployees = () => setRefresh(!refresh);

  return (
    <div>
      <h1>Dashboard</h1>
      <EmployeeForm refreshEmployees={refreshEmployees} />
      <EmployeeList key={refresh} />
    </div>
  );
};

export default Dashboard;
