// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Address = ({ onSelect }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [newAddress, setNewAddress] = useState({
//     C_name: "",
//     mobile: "",
//     pincode: "",
//     locality: "",
//     D_Address: "",
//     city: "",
//     state: "",
//     landmark: "",
//     Alter_mobile: "",
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchAddresses();
//   }, []);

//   const fetchAddresses = async () => {
//     if (!token) {
//       console.error("No token found, user might be logged out.");
//       return;
//     }
//     try {
//       const response = await axios.get("http://localhost:5000/addresses", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAddresses(response.data);
//     } catch (error) {
//       console.error("Error fetching addresses:", error);
//     }
//   };

//   const handleAddressClick = (address) => {
//     setSelectedAddress(address);
//     if (typeof onSelect === "function") {
//       onSelect(address);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
//   };

//   const handleAddAddress = async () => {
//     if (!newAddress.C_name || !newAddress.mobile || !newAddress.pincode || !newAddress.D_Address || !newAddress.city || !newAddress.state) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/add-address", newAddress, {
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//       });
//       setShowForm(false);
//       setNewAddress({
//         C_name: "",
//         mobile: "",
//         pincode: "",
//         locality: "",
//         D_Address: "",
//         city: "",
//         state: "",
//         landmark: "",
//         Alter_mobile: "",
//       });
      
//       // Fetch updated addresses
//       fetchAddresses();
//     } catch (error) {
//       console.error("Error adding address:", error);
//     }
//   };
  
//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
//       <h2>Your Addresses</h2>
//       {addresses.length === 0 ? (
//         <p>No addresses found.</p>
//       ) : (
//         <div>
//           {addresses.map((address) => (
//             <div
//               key={address.A_id}
//               onClick={() => handleAddressClick(address)}
//               style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "15px",
//                 marginBottom: "15px",
//                 backgroundColor: selectedAddress === address ? "#d1e7dd" : "#fff",
//                 cursor: "pointer",
//               }}
//             >
//               <h3>
//                 {address.C_name} <span>({address.mobile})</span>
//               </h3>
//               <p>
//                 {address.D_Address}, {address.locality}, {address.city}, {address.state} - <strong>{address.pincode}</strong>
//               </p>
//               <p>Alternative Mobile: {address.Alter_mobile}</p>
//               {address.landmark && <p>{address.landmark}</p>}
//             </div>
//           ))}
//         </div>
//       )}
//       <button onClick={() => setShowForm(!showForm)} style={{ margin: "20px 0", padding: "10px 15px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
//         {showForm ? "Cancel" : "Add Address"}
//       </button>
//       {showForm && (
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <input type="text" name="C_name" placeholder="Name*" value={newAddress.C_name} onChange={handleInputChange} required />
//           <input type="text" name="mobile" placeholder="Mobile*" value={newAddress.mobile} onChange={handleInputChange} required />
//           <input type="text" name="pincode" placeholder="Pincode*" value={newAddress.pincode} onChange={handleInputChange} required />
//           <input type="text" name="locality" placeholder="Locality" value={newAddress.locality} onChange={handleInputChange} />
//           <input type="text" name="D_Address" placeholder="Detailed Address*" value={newAddress.D_Address} onChange={handleInputChange} required />
//           <input type="text" name="city" placeholder="City*" value={newAddress.city} onChange={handleInputChange} required />
//           <input type="text" name="state" placeholder="State*" value={newAddress.state} onChange={handleInputChange} required />
//           <input type="text" name="landmark" placeholder="Landmark" value={newAddress.landmark} onChange={handleInputChange} />
//           <input type="text" name="Alter_mobile" placeholder="Alternative Mobile" value={newAddress.Alter_mobile} onChange={handleInputChange} />
//           <button onClick={handleAddAddress} style={{ padding: "10px 15px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>Save Address</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Address;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Address = ({ onSelect }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [newAddress, setNewAddress] = useState({
//     C_name: "",
//     mobile: "",
//     pincode: "",
//     locality: "",
//     D_Address: "",
//     city: "",
//     state: "",
//     landmark: "",
//     Alter_mobile: "",
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchAddresses();
//   }, []);

//   const fetchAddresses = async () => {
//     if (!token) {
//       console.error("No token found, user might be logged out.");
//       return;
//     }
//     try {
//       const response = await axios.get("http://localhost:5000/addresses", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAddresses(response.data);
//     } catch (error) {
//       console.error("Error fetching addresses:", error);
//     }
//   };

//   const handleAddressClick = (address) => {
//     setSelectedAddress(address);
//     if (typeof onSelect === "function") {
//       onSelect(address);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
//   };

//   const handleAddAddress = async () => {
//     if (!newAddress.C_name || !newAddress.mobile || !newAddress.pincode || !newAddress.D_Address || !newAddress.city || !newAddress.state) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/add-address", newAddress, {
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//       });
//       setShowForm(false);
//       setNewAddress({
//         C_name: "",
//         mobile: "",
//         pincode: "",
//         locality: "",
//         D_Address: "",
//         city: "",
//         state: "",
//         landmark: "",
//         Alter_mobile: "",
//       });
      
//       fetchAddresses();
//     } catch (error) {
//       console.error("Error adding address:", error);
//     }
//   };

//   const handleDeleteAddress = async (addressId) => {
//     if (!window.confirm("Are you sure you want to delete this address?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/delete-address/${addressId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setAddresses(addresses.filter((address) => address.A_id !== addressId));
//     } catch (error) {
//       console.error("Error deleting address:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
//       <h2>Your Addresses</h2>
//       {addresses.length === 0 ? (
//         <p>No addresses found.</p>
//       ) : (
//         <div>
//           {addresses.map((address) => (
//             <div
//               key={address.A_id}
//               onClick={() => handleAddressClick(address)}
//               style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "15px",
//                 marginBottom: "15px",
//                 backgroundColor: selectedAddress === address ? "#d1e7dd" : "#fff",
//                 cursor: "pointer",
//                 position: "relative",
//               }}
//             >
//               <h3>
//                 {address.C_name} <span>({address.mobile})</span>
//               </h3>
//               <p>
//                 {address.D_Address}, {address.locality}, {address.city}, {address.state} - <strong>{address.pincode}</strong>
//               </p>
//               <p>Alternative Mobile: {address.Alter_mobile}</p>
//               {address.landmark && <p>{address.landmark}</p>}

//               {/* Delete Button */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteAddress(address.A_id);
//                 }}
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   right: "10px",
//                   backgroundColor: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   padding: "5px 10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       <button
//         onClick={() => setShowForm(!showForm)}
//         style={{
//           margin: "20px 0",
//           padding: "10px 15px",
//           cursor: "pointer",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         {showForm ? "Cancel" : "Add Address"}
//       </button>
//       {showForm && (
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <input type="text" name="C_name" placeholder="Name*" value={newAddress.C_name} onChange={handleInputChange} required />
//           <input type="text" name="mobile" placeholder="Mobile*" value={newAddress.mobile} onChange={handleInputChange} required />
//           <input type="text" name="pincode" placeholder="Pincode*" value={newAddress.pincode} onChange={handleInputChange} required />
//           <input type="text" name="locality" placeholder="Locality" value={newAddress.locality} onChange={handleInputChange} />
//           <input type="text" name="D_Address" placeholder="Detailed Address*" value={newAddress.D_Address} onChange={handleInputChange} required />
//           <input type="text" name="city" placeholder="City*" value={newAddress.city} onChange={handleInputChange} required />
//           <input type="text" name="state" placeholder="State*" value={newAddress.state} onChange={handleInputChange} required />
//           <input type="text" name="landmark" placeholder="Landmark" value={newAddress.landmark} onChange={handleInputChange} />
//           <input type="text" name="Alter_mobile" placeholder="Alternative Mobile" value={newAddress.Alter_mobile} onChange={handleInputChange} />
//           <button onClick={handleAddAddress} style={{ padding: "10px 15px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>Save Address</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Address;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Address = ({ onSelect }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [newAddress, setNewAddress] = useState({
//     C_name: "",
//     mobile: "",
//     pincode: "",
//     locality: "",
//     D_Address: "",
//     city: "",
//     state: "",
//     landmark: "",
//     Alter_mobile: "",
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchAddresses();
//   }, []);

//   const fetchAddresses = async () => {
//     if (!token) {
//       console.error("No token found, user might be logged out.");
//       return;
//     }
//     try {
//       const response = await axios.get("http://localhost:5000/addresses", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAddresses(response.data);
//     } catch (error) {
//       console.error("Error fetching addresses:", error);
//     }
//   };

//   const handleAddressClick = (address) => {
//     setSelectedAddress(address);
//     if (typeof onSelect === "function") {
//       onSelect(address);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
//   };

//   const handleAddAddress = async () => {
//     if (!newAddress.C_name || !newAddress.mobile || !newAddress.pincode || !newAddress.D_Address || !newAddress.city || !newAddress.state) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/add-address", newAddress, {
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//       });
//       setShowForm(false);
//       setNewAddress({
//         C_name: "",
//         mobile: "",
//         pincode: "",
//         locality: "",
//         D_Address: "",
//         city: "",
//         state: "",
//         landmark: "",
//         Alter_mobile: "",
//       });
      
//       fetchAddresses();
//     } catch (error) {
//       console.error("Error adding address:", error);
//     }
//   };

//   const handleDeleteAddress = async (addressId) => {
//     if (!addressId) {
//         console.error("Invalid address ID:", addressId);
//         return;
//     }

//     if (!window.confirm("Are you sure you want to delete this address?")) return;

//     try {
//         await axios.delete(`http://localhost:5000/delete-address/${addressId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Address deleted successfully. Fetching updated addresses...");

//         await fetchAddresses(); // Ensure fetch happens after deletion
//     } catch (error) {
//         console.error("Error deleting address:", error);
//     }
// };



//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
//       <h2>Your Addresses</h2>
//       {addresses.length === 0 ? (
//         <p>No addresses found.</p>
//       ) : (
//         <div>
//           {addresses.map((address) => (
//             <div
//               key={address.A_id}
//               onClick={() => handleAddressClick(address)}
//               style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "15px",
//                 marginBottom: "15px",
//                 backgroundColor: selectedAddress === address ? "#d1e7dd" : "#fff",
//                 cursor: "pointer",
//                 position: "relative",
//               }}
//             >
//               <h3>
//                 {address.C_name} <span>({address.mobile})</span>
//               </h3>
//               <p>
//                 {address.D_Address}, {address.locality}, {address.city}, {address.state} - <strong>{address.pincode}</strong>
//               </p>
//               <p>Alternative Mobile: {address.Alter_mobile}</p>
//               {address.landmark && <p>{address.landmark}</p>}

//               {/* Delete Button */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteAddress(address.a_id);
//                 }}
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   right: "10px",
//                   backgroundColor: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   padding: "5px 10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       <button
//         onClick={() => setShowForm(!showForm)}
//         style={{
//           margin: "20px 0",
//           padding: "10px 15px",
//           cursor: "pointer",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         {showForm ? "Cancel" : "Add Address"}
//       </button>
//       {showForm && (
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <input type="text" name="C_name" placeholder="Name*" value={newAddress.C_name} onChange={handleInputChange} required />
//           <input type="text" name="mobile" placeholder="Mobile*" value={newAddress.mobile} onChange={handleInputChange} required />
//           <input type="text" name="pincode" placeholder="Pincode*" value={newAddress.pincode} onChange={handleInputChange} required />
//           <input type="text" name="locality" placeholder="Locality" value={newAddress.locality} onChange={handleInputChange} />
//           <input type="text" name="D_Address" placeholder="Detailed Address*" value={newAddress.D_Address} onChange={handleInputChange} required />
//           <input type="text" name="city" placeholder="City*" value={newAddress.city} onChange={handleInputChange} required />
//           <input type="text" name="state" placeholder="State*" value={newAddress.state} onChange={handleInputChange} required />
//           <input type="text" name="landmark" placeholder="Landmark" value={newAddress.landmark} onChange={handleInputChange} />
//           <input type="text" name="Alter_mobile" placeholder="Alternative Mobile" value={newAddress.Alter_mobile} onChange={handleInputChange} />
//           <button onClick={handleAddAddress} style={{ padding: "10px 15px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>Save Address</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Address;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Address = ({ onSelect }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [newAddress, setNewAddress] = useState({
//     C_name: "",
//     mobile: "",
//     pincode: "",
//     locality: "",
//     D_Address: "",
//     city: "",
//     state: "",
//     landmark: "",
//     Alter_mobile: "",
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchAddresses();
//   }, []);

//   const fetchAddresses = async () => {
//     if (!token) {
//       console.error("No token found, user might be logged out.");
//       return;
//     }
//     try {
//       const response = await axios.get("http://localhost:5000/addresses", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAddresses(response.data);
//     } catch (error) {
//       console.error("Error fetching addresses:", error);
//     }
//   };

//   const handleAddressClick = (address) => {
//     setSelectedAddress(address);
//     if (typeof onSelect === "function") {
//       onSelect(address);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
//   };

//   const handleAddAddress = async () => {
//     if (!newAddress.C_name || !newAddress.mobile || !newAddress.pincode || !newAddress.D_Address || !newAddress.city || !newAddress.state) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:5000/add-address", newAddress, {
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//       });
//       setShowForm(false);
//       setNewAddress({
//         C_name: "",
//         mobile: "",
//         pincode: "",
//         locality: "",
//         D_Address: "",
//         city: "",
//         state: "",
//         landmark: "",
//         Alter_mobile: "",
//       });
//       fetchAddresses();
//     } catch (error) {
//       console.error("Error adding address:", error);
//     }
//   };

//   const handleDeleteAddress = async (a_id) => {
   
   
//     if (!a_id) {
//       console.error("Invalid address ID:", a_id);
//       return;
//     }

//     if (!window.confirm("Are you sure you want to delete this address?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/delete-address/${a_id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchAddresses(); // Fetch updated addresses after deletion
//     } catch (error) {
//       console.error("Error deleting address:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
//       <h2>Your Addresses</h2>
//       {addresses.length === 0 ? (
//         <p>No addresses found.</p>
//       ) : (
//         <div>
//           {addresses.map((address) => (
//             <div
//               key={address.A_id}
//               onClick={() => handleAddressClick(address)}
//               style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "15px",
//                 marginBottom: "15px",
//                 backgroundColor: selectedAddress === address ? "#d1e7dd" : "#fff",
//                 cursor: "pointer",
//                 position: "relative",
//               }}
//             >
//               <h3>
//                 {address.C_name} <span>({address.mobile})</span>
//               </h3>
//               <p>
//                 {address.D_Address}, {address.locality}, {address.city}, {address.state} - <strong>{address.pincode}</strong>
//               </p>
//               <p>Alternative Mobile: {address.Alter_mobile}</p>
//               {address.landmark && <p>{address.landmark}</p>}

//               {/* Delete Button */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteAddress(address.a_id);
//                 }}
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   right: "10px",
//                   backgroundColor: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   padding: "5px 10px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       <button
//         onClick={() => setShowForm(!showForm)}
//         style={{
//           margin: "20px 0",
//           padding: "10px 15px",
//           cursor: "pointer",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         {showForm ? "Cancel" : "Add Address"}
//       </button>
//       {showForm && (
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <input type="text" name="C_name" placeholder="Name*" value={newAddress.C_name} onChange={handleInputChange} required />
//           <input type="text" name="mobile" placeholder="Mobile*" value={newAddress.mobile} onChange={handleInputChange} required />
//           <input type="text" name="pincode" placeholder="Pincode*" value={newAddress.pincode} onChange={handleInputChange} required />
//           <input type="text" name="locality" placeholder="Locality" value={newAddress.locality} onChange={handleInputChange} />
//           <input type="text" name="D_Address" placeholder="Detailed Address*" value={newAddress.D_Address} onChange={handleInputChange} required />
//           <input type="text" name="city" placeholder="City*" value={newAddress.city} onChange={handleInputChange} required />
//           <input type="text" name="state" placeholder="State*" value={newAddress.state} onChange={handleInputChange} required />
//           <input type="text" name="landmark" placeholder="Landmark" value={newAddress.landmark} onChange={handleInputChange} />
//           <input type="text" name="Alter_mobile" placeholder="Alternative Mobile" value={newAddress.Alter_mobile} onChange={handleInputChange} />
//           <button onClick={handleAddAddress} style={{ padding: "10px 15px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>Save Address</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Address;


import React, { useState, useEffect } from "react";
import axios from "axios";

const Address = ({ onSelect }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    C_name: "",
    mobile: "",
    pincode: "",
    locality: "",
    D_Address: "",
    city: "",
    state: "",
    landmark: "",
    Alter_mobile: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    if (!token) {
      console.error("No token found, user might be logged out.");
      return;
    }
    try {
      const response = await axios.get("http://localhost:5000/addresses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddresses(response.data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const handleAddressClick = (address) => {
    setSelectedAddress(address);
    if (typeof onSelect === "function") {
      onSelect(address);
    }
  };

  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleAddAddress = async () => {
    if (!newAddress.C_name || !newAddress.mobile || !newAddress.pincode || !newAddress.D_Address || !newAddress.city || !newAddress.state) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/add-address", newAddress, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      });
      setShowForm(false);
      setNewAddress({
        C_name: "",
        mobile: "",
        pincode: "",
        locality: "",
        D_Address: "",
        city: "",
        state: "",
        landmark: "",
        Alter_mobile: "",
      });
      fetchAddresses();
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  const handleDeleteAddress = async (a_id) => {
    if (!a_id) {
      console.error("Invalid address ID:", a_id);
      return;
    }

    if (!window.confirm("Are you sure you want to delete this address?")) return;

    try {
      await axios.delete(`http://localhost:5000/delete-address/${a_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Address deleted successfully!");
      fetchAddresses(); // Fetch updated addresses after deletion
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Your Addresses</h2>
      {addresses.length === 0 ? (
        <p>No addresses found.</p>
      ) : (
        <div>
          {addresses.map((address) => (
            <div
              key={address.A_id}
              onClick={() => handleAddressClick(address)}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
                backgroundColor: selectedAddress === address ? "#d1e7dd" : "#fff",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <h3>
                {address.C_name} <span>({address.mobile})</span>
              </h3>
              <p>
                {address.D_Address}, {address.locality}, {address.city}, {address.state} - <strong>{address.pincode}</strong>
              </p>
              <p>Alternative Mobile: {address.Alter_mobile}</p>
              {address.landmark && <p>{address.landmark}</p>}

              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteAddress(address.a_id);
                }}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          margin: "20px 0",
          padding: "10px 15px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {showForm ? "Cancel" : "Add Address"}
      </button>
      {showForm && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="text" name="C_name" placeholder="Name*" value={newAddress.C_name} onChange={handleInputChange} required />
          <input type="text" name="mobile" placeholder="Mobile*" value={newAddress.mobile} onChange={handleInputChange} required />
          <input type="text" name="pincode" placeholder="Pincode*" value={newAddress.pincode} onChange={handleInputChange} required />
          <input type="text" name="locality" placeholder="Locality" value={newAddress.locality} onChange={handleInputChange} />
          <input type="text" name="D_Address" placeholder="Detailed Address*" value={newAddress.D_Address} onChange={handleInputChange} required />
          <input type="text" name="city" placeholder="City*" value={newAddress.city} onChange={handleInputChange} required />
          <input type="text" name="state" placeholder="State*" value={newAddress.state} onChange={handleInputChange} required />
          <input type="text" name="landmark" placeholder="Landmark" value={newAddress.landmark} onChange={handleInputChange} />
          <input type="text" name="Alter_mobile" placeholder="Alternative Mobile" value={newAddress.Alter_mobile} onChange={handleInputChange} />
          <button onClick={handleAddAddress} style={{ padding: "10px 15px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>Save Address</button>
        </div>
      )}
    </div>
  );
};

export default Address;
