import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../UserContest";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file
import axios from "axios";

const Login = () => {
  const { userName, setuserName } = useContext(UserContext);
  const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true); // Set initial validity as true
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to backend
    await axios
      .post(
        "http://ec2-13-53-129-97.eu-north-1.compute.amazonaws.com:9000/login",
        { loginUsername, password }
      )
      .then((response) => {
        console.log("login Response:", response.data.message);
        setValid(true);
      })
      .catch((err) => {
        console.error(err);
      });

    // Reset form fields
    setLoginUsername("");
    setPassword("");
  };
  
  useEffect(() => {
    if (valid) {
      const timer = setTimeout(() => {
        navigate("/dashboard", { replace: true });
        setuserName(loginUsername);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [valid]);

  return (
    <div className="login-container">
      <div className="floating-div">
        <h2 className="login-heading">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!valid && (
            <p className="login-error">Incorrect username or password</p>
          )}
          <div className="login-buttons">
            <button type="submit" className="login-nav-button">
              Login
            </button>
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
