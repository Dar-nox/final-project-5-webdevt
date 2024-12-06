import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/AdminLoginPage.css";

const AdminLoginPage = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple check for username and password (you can replace this with actual validation)
    if (username === "admin" && password === "123") {
      setAuthenticated(true); // Set authenticated to true
      navigate("/admin"); // Redirect to Admin page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="admin-login-page">
      <h2>Admin Login</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
