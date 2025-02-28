import React, { useState, useEffect } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

const AddressManager = () => {
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get("/addresses");
      setAddresses(response.data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/addresses/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post("/addresses", formData);
    }
    setFormData({ addressLine1: "", addressLine2: "", city: "", state: "", postalCode: "", phoneNumber: "" });
    fetchAddresses();
  };

  const handleEdit = (address) => {
    setFormData(address);
    setEditingId(address.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      await axios.delete(`/addresses/${id}`);
      fetchAddresses();
    }
  };

  return (
    <div className="container mt-5">
      <h2>Manage Addresses</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        {Object.keys(formData).map((key) => (
          <div className="mb-3" key={key}>
            <label className="form-label">{key.replace(/([A-Z])/g, " $1").trim()}</label>
            <input type="text" id={key} className="form-control" value={formData[key]} onChange={handleChange} required={key !== "addressLine2" && key !== "phoneNumber"} />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">{editingId ? "Update Address" : "Save Address"}</button>
      </form>

      <h3>Saved Addresses</h3>
      {addresses.map((address) => (
        <div className="card mt-3" key={address.id}>
          <div className="card-body">
            <p><strong>{address.addressLine1}, {address.addressLine2 || ""}</strong></p>
            <p>{address.city}, {address.state}, {address.postalCode}</p>
            <p>Phone: {address.phoneNumber || "N/A"}</p>
            <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(address)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(address.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressManager;
