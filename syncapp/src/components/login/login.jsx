import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"; // Import the CSS file
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post("/login", { username, password });
      console.log("Login response:", response.data);

      // Reset form fields
      setUsername("");
      setPassword("");
      setValid(true);

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div className="login-buttons">
        <Link to="/signup">
          <button className="login-nav-button">Back</button>
        </Link>
        {/* <button className="login-nav-button" onClick={handleLogin}>
          Login
        </button> */}
        <Link to={valid ? "/dashboard" : "/login"}>
          <button className="login-nav-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
