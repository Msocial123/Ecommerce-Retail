
// import React, { useState, useEffect } from "react";
// import Address from "./Address";
// import axios from "axios";

// const CartModal = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart, onClose }) => {
//   const [step, setStep] = useState("cart");
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [paymentMode, setPaymentMode] = useState("");
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const storedUserId = localStorage.getItem("userId");
//     if (storedUserId) setUserId(storedUserId);
//   }, []);

//   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  

//   const handleAddressSelect = (address) => {
//     console.log("📌 Selected Address:", address);
//     if (!address || !address.id) {
//       console.error("❌ Invalid Address Selected:", address);
//       return;
//     }
//     setSelectedAddress(address); // Store full address with A_id
//   };

//   const handlePaymentSelect = (mode) => {
//     console.log("💳 Payment Mode Selected:", mode);
//     setPaymentMode(mode);
//   };

//   const handleConfirmOrder = async () => {
//     console.log("✅ Confirm Order Clicked");
//     console.log("🏠 Address:", selectedAddress);
//     console.log("💰 Payment Mode:", paymentMode);

//     if (!selectedAddress || !selectedAddress.a_id) {
//       alert("Please select a valid address.");
//       return;
//     }

//     if (!paymentMode) {
//       alert("Please select a payment mode.");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("Your cart is empty.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("User not authenticated. Please log in.");
//       return;
//     }

//     const orderDetails = {
//       userId: Number(userId),
//       addressId: selectedAddress.a_id, // Ensure A_id is sent
//       totalAmount: subtotal,
//       paymentMode,
//       orderDate: new Date().toISOString(),
//       products: cart.map((item) => ({
//         productName: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//     };

//     console.log("📤 Sending Order Details:", orderDetails);

//     try {
//       const response = await axios.post("http://localhost:5000/place-order", orderDetails, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });

//       if (response.data.success) {
//         alert("🎉 Order Placed Successfully!");
//         onClose();
//       } else {
//         alert("⚠️ Failed to place order.");
//       }
//     } catch (error) {
//       console.error("❌ Order Error:", error);
//       alert("Error placing order. Please try again.");
//     }
//   };

//   return (
//     <div className="modal show d-flex justify-content-center align-items-center" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}>
//       <div className="modal-dialog" style={{ maxWidth: "500px", width: "100%", margin: "auto" }}>
//         <div className="modal-content">
//           <div className="modal-header bg-light">
//             <h5 className="modal-title">{step === "cart" ? "Your Cart" : "Place Order"}</h5>
//             <button className="btn-close" onClick={onClose}></button>
//           </div>

//           {step === "cart" ? (
//             <div className="modal-body">
//               {cart.length === 0 ? (
//                 <p className="text-center">Your cart is empty.</p>
//               ) : (
//                 <>
//                   <ul className="list-group">
//                     {cart.map((item, index) => (
//                       <li key={`${item.id}-${index}`} className="list-group-item d-flex justify-content-between align-items-center">
//                         <div className="d-flex align-items-center">
//                           <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px", borderRadius: "5px" }} />
//                           <div>
//                             <strong>{item.name}</strong>
//                             <p className="mb-0">{item.price} x {item.quantity}</p>
//                           </div>
//                         </div>
//                         <div className="d-flex align-items-center">
//                           <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>−</button>
//                           <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => increaseQuantity(item.id)}>+</button>
//                           <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="mt-4 text-center">
//                     <h6>Order Summary</h6>
//                     <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
//                   </div>
//                 </>
//               )}
//             </div>
//           ) : (
//             <div className="modal-body">
//               <h4>Select Address</h4>
//               <Address onSelect={handleAddressSelect} />

//               {selectedAddress && (
//                 <div className="mt-2 p-2 border rounded">
//                   <h6>Selected Address:</h6>
//                   <p>{selectedAddress.a_id},{selectedAddress.C_name}, {selectedAddress.mobile}, {selectedAddress.D_Address}, {selectedAddress.locality}, {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}</p>
//                   <p><strong>Address ID (a_id):</strong> {selectedAddress.a_id}</p>
//                 </div>
//               )}

//               <h4 className="mt-3">Select Payment Mode</h4>
//               <div className="d-flex justify-content-center">
//                 {["Credit Card", "Debit Card", "UPI"].map((mode) => (
//                   <button key={mode} className={`btn ${paymentMode === mode ? "btn-primary" : "btn-outline-primary"} me-2`} onClick={() => handlePaymentSelect(mode)}>
//                     {mode}
//                   </button>
//                 ))}
//               </div>

//               <button onClick={handleConfirmOrder} className="btn btn-success mt-3 w-100">Confirm Order</button>
//             </div>
//           )}

//           {cart.length > 0 && step === "cart" && (
//             <div className="modal-footer bg-light">
//               <button className="btn btn-primary w-100" onClick={() => setStep("orderDetails")}>
//                 Proceed to Checkout ₹{subtotal.toFixed(2)}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartModal;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import Address from "./Address";
// import axios from "axios";

// const CartModal = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart, onClose, setCart }) => {
//   const [step, setStep] = useState("cart");
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [paymentMode, setPaymentMode] = useState("");
//   const [userId, setUserId] = useState(null);
//   const navigate = useNavigate(); // Initialize useNavigate for redirection

//   useEffect(() => {
//     const storedUserId = localStorage.getItem("userId");
//     if (storedUserId) setUserId(storedUserId);
//   }, []);

//   const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleAddressSelect = (address) => {
//     console.log("📌 Selected Address:", address);
//     if (!address || !address.a_id) {
//       console.error("❌ Invalid Address Selected:", address);
//       return;
//     }
//     setSelectedAddress(address);
//   };

//   const handlePaymentSelect = (mode) => {
//     console.log("💳 Payment Mode Selected:", mode);
//     setPaymentMode(mode);
//   };

//   const handleConfirmOrder = async () => {
//     console.log("✅ Confirm Order Clicked");
//     console.log("🏠 Address:", selectedAddress);
//     console.log("💰 Payment Mode:", paymentMode);

//     if (!selectedAddress || !selectedAddress.a_id) {
//       alert("Please select a valid address.");
//       return;
//     }

//     if (!paymentMode) {
//       alert("Please select a payment mode.");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("Your cart is empty.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("User not authenticated. Please log in.");
//       return;
//     }

//     const orderDetails = {
//       userId: Number(userId),
//       addressId: selectedAddress.a_id,
//       totalAmount: subtotal,
//       paymentMode,
//       orderDate: new Date().toISOString(),
//       products: cart.map((item) => ({
//         productName: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//     };

//     console.log("📤 Sending Order Details:", orderDetails);

//     try {
//       const response = await axios.post("http://localhost:5000/place-order", orderDetails, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });

//       if (response.data.success) {
//         alert("🎉 Order Placed Successfully!");

//         // Clear the cart
//         setCart([]);

//         // Close the modal
//         onClose();

//         // Navigate to Order.js component
//         navigate("/orders");
//       } else {
//         alert("⚠️ Failed to place order.");
//       }
//     } catch (error) {
//       console.error("❌ Order Error:", error);
//       alert("Error placing order. Please try again.");
//     }
//   };

//   return (
//     <div className="modal show d-flex justify-content-center align-items-center"
//       style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}>
//       <div className="modal-dialog" style={{ maxWidth: "500px", width: "100%", margin: "auto" }}>
//         <div className="modal-content">
//           <div className="modal-header bg-light">
//             <h5 className="modal-title">{step === "cart" ? "Your Cart" : "Place Order"}</h5>
//             <button className="btn-close" onClick={onClose}></button>
//           </div>

//           {step === "cart" ? (
//             <div className="modal-body">
//               {cart.length === 0 ? (
//                 <p className="text-center">Your cart is empty.</p>
//               ) : (
//                 <>
//                   <ul className="list-group">
//                     {cart.map((item, index) => (
//                       <li key={`${item.id}-${index}`} className="list-group-item d-flex justify-content-between align-items-center">
//                         <div className="d-flex align-items-center">
//                           <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px", borderRadius: "5px" }} />
//                           <div>
//                             <strong>{item.name}</strong>
//                             <p className="mb-0">{item.price} x {item.quantity}</p>
//                           </div>
//                         </div>
//                         <div className="d-flex align-items-center">
//                           <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>−</button>
//                           <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => increaseQuantity(item.id)}>+</button>
//                           <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="mt-4 text-center">
//                     <h6>Order Summary</h6>
//                     <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
//                   </div>
//                 </>
//               )}
//             </div>
//           ) : (
//             <div className="modal-body">
//               <h4>Select Address</h4>
//               <Address onSelect={handleAddressSelect} />

//               {selectedAddress && (
//                 <div className="mt-2 p-2 border rounded">
//                   <h6>Selected Address:</h6>
//                   <p>{selectedAddress.a_id}, {selectedAddress.C_name}, {selectedAddress.mobile}, {selectedAddress.D_Address}, {selectedAddress.locality}, {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}</p>
//                   <p><strong>Address ID (a_id):</strong> {selectedAddress.a_id}</p>
//                 </div>
//               )}

//               <h4 className="mt-3">Select Payment Mode</h4>
//               <div className="d-flex justify-content-center">
//                 {["Credit Card", "Debit Card", "UPI"].map((mode) => (
//                   <button key={mode} className={`btn ${paymentMode === mode ? "btn-primary" : "btn-outline-primary"} me-2`} onClick={() => handlePaymentSelect(mode)}>
//                     {mode}
//                   </button>
//                 ))}
//               </div>

//               <button onClick={handleConfirmOrder} className="btn btn-success mt-3 w-100">Confirm Order</button>
//             </div>
//           )}

//           {cart.length > 0 && step === "cart" && (
//             <div className="modal-footer bg-light">
//               <button className="btn btn-primary w-100" onClick={() => setStep("orderDetails")}>
//                 Proceed to Checkout ₹{subtotal.toFixed(2)}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartModal;


import React, { useState, useEffect } from "react";
import Address from "./Address";
import axios from "axios";

const CartModal = ({ cart, setCart, increaseQuantity, decreaseQuantity, removeFromCart, onClose }) => {
  const [step, setStep] = useState("cart");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMode, setPaymentMode] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) setUserId(storedUserId);
  }, []);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleAddressSelect = (address) => {
    console.log("📌 Selected Address:", address);
    if (!address || !address.a_id) {
      console.error("❌ Invalid Address Selected:", address);
      return;
    }
    setSelectedAddress(address);
  };

  const handlePaymentSelect = (mode) => {
    console.log("💳 Payment Mode Selected:", mode);
    setPaymentMode(mode);
  };

  // const handleConfirmOrder = async () => {
  //   console.log("✅ Confirm Order Clicked");
  //   console.log("🏠 Address:", selectedAddress);
  //   console.log("💰 Payment Mode:", paymentMode);

  //   if (!selectedAddress || !selectedAddress.a_id) {
  //     alert("Please select a valid address.");
  //     return;
  //   }

  //   if (!paymentMode) {
  //     alert("Please select a payment mode.");
  //     return;
  //   }

  //   if (cart.length === 0) {
  //     alert("Your cart is empty.");
  //     return;
  //   }

  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     alert("User not authenticated. Please log in.");
  //     return;
  //   }

  //   const orderDetails = {
  //     userId: Number(userId),
  //     addressId: selectedAddress.a_id,
  //     totalAmount: subtotal,
  //     paymentMode,
  //     orderDate: new Date().toISOString(),
  //     products: cart.map((item) => ({
  //       productName: item.name,
  //       quantity: item.quantity,
  //       price: item.price,
  //     })),
  //   };

  //   console.log("📤 Sending Order Details:", orderDetails);

  //   try {
  //     const response = await axios.post("http://localhost:5000/place-order", orderDetails, {
  //       headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  //     });

  //     console.log("🔍 API Response:", response.data);

  //     if (response.data.success) {
  //       alert("🎉 Order Placed Successfully!");

  //       // ✅ Clear the cart
  //       setCart([]);

  //       // ✅ Redirect to order page
  //       window.location.href = "/order";
  //     } else {
  //       alert("⚠️ Failed to place order.");
  //     }
  //   } catch (error) {
  //     console.error("❌ Order Error:", error);

  //     if (error.response) {
  //       alert(`Error: ${error.response.data.message || "Failed to place order."}`);
  //     } else {
  //       alert("An unexpected error occurred. Please try again.");
  //     }
  //   }
  // };
  const handleConfirmOrder = async () => {
    console.log("✅ Confirm Order Clicked");
    console.log("🏠 Address:", selectedAddress);
    console.log("💰 Payment Mode:", paymentMode);

    if (!selectedAddress || !selectedAddress.a_id) {
        alert("Please select a valid address.");
        return;
    }

    if (!paymentMode) {
        alert("Please select a payment mode.");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
        alert("User not authenticated. Please log in.");
        return;
    }

    const orderDetails = {
        userId: Number(userId),
        addressId: selectedAddress.a_id,
        totalAmount: subtotal,
        paymentMode,
        orderDate: new Date().toISOString(),
        products: cart.map((item) => ({
            productName: item.name,
            quantity: item.quantity,
            price: item.price,
        })),
    };

    console.log("📤 Sending Order Details:", orderDetails);

    try {
        const response = await axios.post("http://localhost:5000/place-order", orderDetails, {
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        });

        console.log("🔍 API Response:", response.data);

        if (response.data.success) {
            alert("🎉 Order Placed Successfully!");

            // ✅ Clear cart from state
            // setCart([]);

            // ✅ Clear cart from local storage
            localStorage.removeItem("cart");

            // ✅ Redirect user to order page
            window.location.href = "/dashboard";
        } else {
            alert("⚠️ Failed to place order.");
        }
    } catch (error) {
        console.error("❌ Order Error:", error);

        if (error.response) {
            alert(`Error: ${error.response.data.message || "Failed to place order."}`);
        } else {
            alert("An unexpected error occurred. Please try again.");
        }
    }
};

  return (
    <div className="modal show d-flex justify-content-center align-items-center" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}>
      <div className="modal-dialog" style={{ maxWidth: "500px", width: "100%", margin: "auto" }}>
        <div className="modal-content">
          <div className="modal-header bg-light">
            <h5 className="modal-title">{step === "cart" ? "Your Cart" : "Place Order"}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          {step === "cart" ? (
            <div className="modal-body">
              {cart.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="list-group">
                    {cart.map((item, index) => (
                      <li key={`${item.id}-${index}`} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px", borderRadius: "5px" }} />
                          <div>
                            <strong>{item.name}</strong>
                            <p className="mb-0">{item.price} x {item.quantity}</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>−</button>
                          <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => increaseQuantity(item.id)}>+</button>
                          <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-center">
                    <h6>Order Summary</h6>
                    <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="modal-body">
              <h4>Select Address</h4>
              <Address onSelect={handleAddressSelect} />

              {selectedAddress && (
                <div className="mt-2 p-2 border rounded">
                  <h6>Selected Address:</h6>
                  <p>{selectedAddress.a_id}, {selectedAddress.C_name}, {selectedAddress.mobile}, {selectedAddress.D_Address}, {selectedAddress.locality}, {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}</p>
                  <p><strong>Address ID (a_id):</strong> {selectedAddress.a_id}</p>
                </div>
              )}

              <h4 className="mt-3">Select Payment Mode</h4>
              <div className="d-flex justify-content-center">
                {["Credit Card", "Debit Card", "UPI"].map((mode) => (
                  <button key={mode} className={`btn ${paymentMode === mode ? "btn-primary" : "btn-outline-primary"} me-2`} onClick={() => handlePaymentSelect(mode)}>
                    {mode}
                  </button>
                ))}
              </div>

              <button onClick={handleConfirmOrder} className="btn btn-success mt-3 w-100">Confirm Order</button>
            </div>
          )}

          {cart.length > 0 && step === "cart" && (
            <div className="modal-footer bg-light">
              <button className="btn btn-primary w-100" onClick={() => setStep("orderDetails")}>
                Proceed to Checkout ₹{subtotal.toFixed(2)}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
