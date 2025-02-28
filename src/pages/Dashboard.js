import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/dashboard");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.name}!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
