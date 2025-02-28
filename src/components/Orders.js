
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import allProducts from "../pages/allProducts"; // Import all products list

// const Orders = () => {
//     const [orders, setOrders] = useState([]);
//     const [expandedOrderId, setExpandedOrderId] = useState(null);
//     const [orderDetails, setOrderDetails] = useState({});
//     const [loadingOrderId, setLoadingOrderId] = useState(null);

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const response = await axios.get("http://localhost:5000/orders", {
//                 headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//             });
//             setOrders(response.data);
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//         }
//     };

//     const fetchOrderDetails = async (orderId) => {
//         setLoadingOrderId(orderId);
//         try {
//             const response = await axios.get(`http://localhost:5000/orders/${orderId}`, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//             });
//             setOrderDetails((prev) => ({ ...prev, [orderId]: response.data }));
//         } catch (error) {
//             console.error("Error fetching order details:", error);
//         } finally {
//             setLoadingOrderId(null);
//         }
//     };

//     const toggleOrderDetails = (orderId) => {
//         if (expandedOrderId === orderId) {
//             setExpandedOrderId(null);
//         } else {
//             setExpandedOrderId(orderId);
//             if (!orderDetails[orderId]) fetchOrderDetails(orderId);
//         }
//     };

//     const getProductImage = (productName) => {
//         const product = allProducts.find(p => p.name.toLowerCase() === productName.toLowerCase());
//         return product ? product.image : "/images/default.png"; // Default image if not found
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {orders.map((order) => (
//                     <div key={order.order_id} className="border rounded-lg shadow-md">
//                         <div
//                             className="p-4 cursor-pointer hover:bg-gray-100 transition flex justify-between items-center"
//                             onClick={() => toggleOrderDetails(order.order_id)}
//                         >
//                             <div>
//                                 <p className="font-semibold">Order ID: {order.order_id}</p>
//                                 <p>Total: ₹{order.total_amount}</p>
//                             </div>
//                             <span className="text-xl">
//                                 {expandedOrderId === order.order_id ? "▲" : "▼"}
//                             </span>
//                         </div>

//                         {expandedOrderId === order.order_id && (
//                             <div className="p-4 border-t bg-white">
//                                 {loadingOrderId === order.order_id ? (
//                                     <p className="text-center py-4">Loading order details...</p>
//                                 ) : orderDetails[order.order_id] ? (
//                                     <>
//                                         {/* Order Items */}
//                                         <h4 className="font-semibold mb-2">Order Items</h4>
//                                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//                                             {orderDetails[order.order_id].items.map((item, index) => (
//                                                 <div key={index} className="flex flex-col items-center text-center p-2 border rounded-lg shadow-sm">
//                                                   <table> <th><img 
//                                                         src={getProductImage(item.product_name)} 
//                                                         alt={item.product_name} 
//                                                         style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "0px", borderRadius: "5px" }}
//                                                     />
//                                                     <p className="text-sm font-medium">{item.product_name}</p>
//                                                     <p className="text-xs">{item.quantity} x ₹{item.price}</p></th>
//                                                     </table>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         <div className="mt-4 flex flex-col md:flex-row gap-6">
//     {/* Payment Details */}
//     <div className="w-full md:w-1/2 border p-4 rounded-lg shadow-md">
//     <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "20px" }}>
//   <tr>
//     <td style={{ verticalAlign: "top", paddingRight: "20px" }}>
//       <h4 className="font-semibold mb-2">Payment Details</h4>
//       <p><strong>Mode:</strong> {orderDetails[order.order_id].payment.payment_mode}</p>
//       <p><strong>Status:</strong> {orderDetails[order.order_id].payment.payment_status}</p>
//       <p><strong>Transaction ID:</strong> {orderDetails[order.order_id].payment.transaction_id || "N/A"}</p>
//       <p><strong>Date:</strong> {new Date(orderDetails[order.order_id].payment.payment_date).toLocaleString()}</p>
//     </td>

//     {/* Delivery Address */}
//     <td style={{ verticalAlign: "top", paddingLeft: "20px" }}>
//       <h4 className="font-semibold mb-2">Delivery Address</h4>
//       <p>{orderDetails[order.order_id].address.C_name}, {orderDetails[order.order_id].address.mobile}, {orderDetails[order.order_id].address.pincode}</p>
//       <p>{orderDetails[order.order_id].address.locality}, {orderDetails[order.order_id].address.D_Address}</p>
//       <p>{orderDetails[order.order_id].address.city}, {orderDetails[order.order_id].address.state}</p>
//       <p>{orderDetails[order.order_id].address.landmark}, {orderDetails[order.order_id].address.Alter_mobile || "N/A"}</p>
//     </td>
//   </tr>
// </table>

//     </div>
// </div>


//                                         {/* Subtotal */}
//                                         <p className="mt-4 font-semibold"><h2>Total Amount: ₹{order.total_amount}</h2></p>
//                                     </>
//                                 ) : (
//                                     <p className="text-center py-4 text-red-500">Order details unavailable</p>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Orders;


import React, { useEffect, useState } from "react";
import axios from "axios";
import allProducts from "../pages/allProducts"; // Import all products list

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const [orderDetails, setOrderDetails] = useState({});
    const [loadingOrderId, setLoadingOrderId] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get("http://localhost:5000/orders", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    const fetchOrderDetails = async (orderId) => {
        setLoadingOrderId(orderId);
        try {
            const response = await axios.get(`http://localhost:5000/orders/${orderId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setOrderDetails((prev) => ({ ...prev, [orderId]: response.data }));
        } catch (error) {
            console.error("Error fetching order details:", error);
        } finally {
            setLoadingOrderId(null);
        }
    };

    const toggleOrderDetails = (orderId) => {
        if (expandedOrderId === orderId) {
            setExpandedOrderId(null);
        } else {
            setExpandedOrderId(orderId);
            if (!orderDetails[orderId]) fetchOrderDetails(orderId);
        }
    };

    const getProductImage = (productName) => {
        const product = allProducts.find(p => p.name.toLowerCase() === productName.toLowerCase());
        return product ? product.image : "/images/default.png"; // Default image if not found
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

            {orders.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No orders found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {orders.map((order) => (
                        <div key={order.order_id} className="border rounded-lg shadow-md">
                            <div
                                className="p-4 cursor-pointer hover:bg-gray-100 transition flex justify-between items-center"
                                onClick={() => toggleOrderDetails(order.order_id)}
                            >
                                <div>
                                    <p className="font-semibold">Order ID: {order.order_id}</p>
                                    <p>Total: ₹{order.total_amount}</p>
                                </div>
                                <span className="text-xl">
                                    {expandedOrderId === order.order_id ? "▲" : "▼"}
                                </span>
                            </div>

                            {expandedOrderId === order.order_id && (
                                <div className="p-4 border-t bg-white">
                                    {loadingOrderId === order.order_id ? (
                                        <p className="text-center py-4">Loading order details...</p>
                                    ) : orderDetails[order.order_id] ? (
                                        <>
                                            <h4 className="font-semibold mb-2">Order Items</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                                {orderDetails[order.order_id].items.map((item, index) => (
                                                    <div key={index} className="flex flex-row items-start text-left p-2 border border-gray-300 rounded-lg shadow-sm w-auto">
                                                        <img 
                                                            src={getProductImage(item.product_name)} 
                                                            alt={item.product_name} 
                                                            style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "0px", borderRadius: "5px" }}
                                                            className="w-16 h-16 object-cover rounded-md"
                                                            
                                                        />
                                                        <p className="text-sm font-medium mt-2">{item.product_name} {item.quantity} x ₹{item.price}</p>
                                                        <p className="text-xs text-gray-600"></p>
                                                       
                                                    </div>
                                                    
                                                ))}
                                                 <p className="mt-4 font-semibold text-lg">Total Bill: ₹{order.total_amount}</p>
                                            </div>

                                            <div className="mt-4 flex flex-col md:flex-row gap-6">
                                            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "20px" }}>
                                                <tr>
                                                <td style={{ verticalAlign: "top", paddingRight: "20px" }}>
                                               <h4 className="font-semibold mb-2">Payment Details</h4>
                                                <p><strong>Mode:</strong> {orderDetails[order.order_id].payment.payment_mode}</p>
                                                 <p><strong>Status:</strong> {orderDetails[order.order_id].payment.payment_status}</p>
                                                <p><strong>Transaction ID:</strong> {orderDetails[order.order_id].payment.transaction_id || "N/A"}</p>
                                                 <p><strong>Date:</strong> {new Date(orderDetails[order.order_id].payment.payment_date).toLocaleString()}</p>
                                                </td>

    {/* Delivery Address */}
    <td style={{ verticalAlign: "top", paddingLeft: "20px" }}>
      <h4 className="font-semibold mb-2">Delivery Address</h4>
    <p>{orderDetails[order.order_id].address.C_name}, {orderDetails[order.order_id].address.mobile}, {orderDetails[order.order_id].address.pincode}</p>
     <p>{orderDetails[order.order_id].address.locality}, {orderDetails[order.order_id].address.D_Address}</p>
      <p>{orderDetails[order.order_id].address.city}, {orderDetails[order.order_id].address.state}</p>
     <p>{orderDetails[order.order_id].address.landmark}, {orderDetails[order.order_id].address.Alter_mobile || "N/A"}</p>
   </td>
  </tr>
 </table>
                                            </div>

                                            
                                        </>
                                    ) : (
                                        <p className="text-center py-4 text-red-500">Order details unavailable</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
