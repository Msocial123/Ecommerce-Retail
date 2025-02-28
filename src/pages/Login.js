// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//         const response = await fetch("http://localhost:5000/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, password }),
//         });

//         const data = await response.json();
//         console.log("API Response:", data);  // Debugging log

//         if (!response.ok) {
//             throw new Error(data.message || "Login failed. Please try again.");
//         }

//         if (!data.firstName) {
//             throw new Error("First name is missing in response.");
//         }

//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userId", data.userId);
//         localStorage.setItem("firstName", data.firstName);
//         localStorage.setItem("lastName", data.lastName);
//         localStorage.setItem("isLoggedIn", "true");

//         alert(`Welcome back, ${data.firstName}!`);
//         navigate("/");
//         window.location.reload(); // Refresh Navbar and authenticated state
//     } catch (err) {
//         setError(err.message);
//     } finally {
//         setLoading(false);
//     }
// };
//   return (
//     <div className="login-wrapper">
//       <div className="login-container">
//         <div className="form-container">
//           <h2>Welcome Back!</h2>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-row">
//               <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="form-row">
//               <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//               />
//             </div>
//             <button type="submit" className="submit-btn" disabled={loading}>
//               {loading ? "Logging in..." : "Log In"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log("API Response:", data);  // Debugging log

        if (!response.ok) {
            throw new Error(data.message || "Login failed. Please try again.");
        }

        if (!data.firstName) {
            throw new Error("First name is missing in response.");
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("isLoggedIn", "true");

        alert(`Welcome back, ${data.firstName}!`);
        navigate("/");
        window.location.reload(); // Refresh Navbar and authenticated state
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="form-container">
          <h2>Welcome Back!</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-row"><i className="fas fa-envelope field-icon"></i>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-row"><i className="fas fa-lock field-icon"></i>
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              
            </div>
            <div className="forgot-password">
              <a href="/pages/forgotpw">Forgot your password?</a>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="footer">
            <p>By continuing, you agree to our <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
            <p>New here? <a href="/signup">Create your account</a></p>
          </div>
           {/* Google Sign-in Button */}
           <button type="button" className="google-btn">
            <i className="fab fa-google"></i> Sign in with Google
          </button>
        </div>
        <div className="pattern-container">
          <img src="/images/login.png" alt="Decorative" />
        </div>
      </div>
    </div>
  );
};

export default Login;