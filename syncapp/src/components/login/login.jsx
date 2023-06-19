import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true); // Set initial validity as true
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:9000/login", { username, password });
      console.log("Login response:", response.data);

      // Reset form fields
      setUsername("");
      setPassword("");
      setValid(true);

      // Redirect to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);
      setValid(false); // Update validity to false
    }
  };

  return (
    <div className="login-container">
      <div className="floating-div">
        <h2 className="login-heading">Login</h2>
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
          {!valid && <p className="login-error">Incorrect username or password</p>}
          <div className="login-buttons">
            <button type="submit" className="login-nav-button">Login</button>
            <Link to="/signup" className="back-button">
              <p>Dont have an account? Signup</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
