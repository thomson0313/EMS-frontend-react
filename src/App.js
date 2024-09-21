import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import EmployeeDetails from "./pages/EmployeeDetails";
import EditEmployee from "./pages/EditEmployee"; // Import the edit component
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/employee/:id"
            element={
              <PrivateRoute>
                <EmployeeDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <EditEmployee />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
