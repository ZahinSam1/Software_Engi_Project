import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"; // Import the CSS file
import axios from "axios";

const Signup = () => {
  const [processing, setProcessing] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // New state for the popup
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!username || !password || !email) {
      setShowPopup(true); // Show the popup if any field is empty
      return;
    }

    // Perform registration logic here, e.g., send registration request to backend
    const userData = {
      username: username,
      password: password,
      email: email,
    };

    setProcessing(true);

    // Send registration request to backend API
    axios
      .post("http://localhost:9000/register", userData)
      .then((response) => {
        // Handle successful registration
        console.log("Registration successful", response.data.message);
        // if (response.status !== 409) {
        // }
        setValid(true);

      })
      .then((error) => {
        
        // Handle registration error
        if (error.response && error.response.status === 409) {
          // Account already exists
          console.log("Account already exists");
          setValid(false); // Update valid state to false
        } else {
          // Handle other registration errors
          console.error("Registration failed", error);
        }
        
      })
      // .finally(() => {
      //   setTimeout(() => {
      //     setProcessing(false);
      //   }, 2000); // Add a delay of 2000 milliseconds (2 seconds)
      // });
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
    <>
      {processing ? (
        <>
          <div className="blurred"> </div>
          {valid === true ? (
            <h1 className="successfully">You Have Successfully Registered</h1>
          ) : (
            <h1 className="successfully">Account Already Exists</h1>
          )}
          {/* {!valid && <h1 className="successfully">Account Already Exists</h1>} */}
          {/* {valid && (
            <h1 className="successfully">You Have Successfully Registered</h1>
          )} */}
        </>
      ) : null}
      <div className="signup-container">
        {!processing && (
          <div className="floating-div">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="signup-form" method="post">
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="signup-input"
                  placeholder="Username"
                />
                <label htmlFor="username" className="form-label">
                  Username
                </label>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="signup-input"
                  placeholder="Password"
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="signup-input"
                  placeholder="Email"
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>
              <button className="signup-buttons">Register</button>
            </form>
          </div>
        )}
      </div>
      {showPopup && (
        <div className="popup">
          <p>Please input credentials to proceed</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </>
  );
};

export default Signup;
