import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Ensure styles are loaded
import UserDetails from "./UserDetails";
import Orders from "./Orders";
import Address from "./Address";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("Response Status:", res.status);
        if (!res.ok) {
          handleLogout(); // Call logout function if unauthorized
          throw new Error("Session expired. Please log in again.");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched User Data:", data);
        if (!data || Object.keys(data).length === 0) {
          setError("No user data received from API.");
          return;
        }
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        setError(error.message);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    sessionStorage.clear(); // Clear session storage
    navigate("/login"); // Redirect to login
  };

  if (error) {
    return (
      <div className="container mt-4 text-center">
        <h2>{error}</h2>
        <button onClick={handleLogout} className="btn btn-danger">
          Login Again
        </button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mt-4 text-center">
        <h2>Loading profile...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        Welcome <strong>{user.firstName} {user.lastName}</strong>
      </div>

      <div className="dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          <div
            className={activeTab === "overview" ? "active-tab" : ""}
            onClick={() => setActiveTab("overview")}
          >
            <i className="fas fa-user"></i> Overview
          </div>
          <div
            className={activeTab === "orders" ? "active-tab" : ""}
            onClick={() => setActiveTab("orders")}
          >
            <i className="fas fa-box"></i> Orders
          </div>
          <div
            className={activeTab === "addresses" ? "active-tab" : ""}
            onClick={() => setActiveTab("addresses")}
          >
            <i className="fas fa-map-marker-alt"></i> Saved Addresses
          </div>

          {/* Logout Button */}
          {/* <div className="logout-button" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </div> */}
        </div>

        {/* Dynamic Content Rendering */}
        <div className="main-content">
          {activeTab === "overview" && <UserDetails />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "addresses" && <Address />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
