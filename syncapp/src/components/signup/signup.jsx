import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"; // Import the CSS file
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here, e.g., send registration request to backend
    const userData = {
      username: username,
      password: password,
      email: email,
    };
    // Send registration request to backend API
    axios
      .post("http://localhost:9000/register", userData)
      .then((response) => {
        // Handle successful registration
        console.log("Registration successful", response.data.message);
        setValid(true);
      })
      .catch((error) => {
        // Handle registration error
        console.error("Registration failed", error);
      });

    // Reset form fields
    // setUsername("");
    // setPassword("");
    // setEmail("");
  };

  useEffect(() => {
    if (valid) {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [valid]);

  return (
    <div className="signup-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="signup-form" method="post">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
        </div>
        <button
          className="signup-buttons"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;