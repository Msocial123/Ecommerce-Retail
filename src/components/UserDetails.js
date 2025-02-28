import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
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
                handleLogout();  // Call logout function if unauthorized
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
        <div className="user-details">
            <h2>User Details</h2>
            <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber || "Not Available"}</p>
            <p><strong>Address:</strong> {user.address || "Not Available"}</p>
        </div>
    );
};

export default UserDetails;
