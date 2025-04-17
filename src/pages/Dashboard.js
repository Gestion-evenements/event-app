import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mt-5 text-center">
      <div className="card p-5 shadow-sm">
        <h2 className="mb-4">Bienvenue, {user?.email} !</h2>
        <button onClick={handleLogout} className="btn btn-danger">Se déconnecter</button>
      </div>
    </div>
  );
};

export default Dashboard;
