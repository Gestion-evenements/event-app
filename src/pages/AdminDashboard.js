// src/pages/AdminDashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mt-5 text-center">
      <div className="card p-5 shadow-sm">
        <h2 className="mb-4 text-danger">Bienvenue Admin, {user?.email} 👑</h2>
        <button onClick={handleLogout} className="btn btn-dark">
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
