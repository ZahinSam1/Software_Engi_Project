import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";

const Signup = () => {
  const [processing, setProcessing] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !email || !confirmPassword) {
      setStatusMsg("Please input credentials to proceed");
      setShowPopup(true);
      return;
    }
  
    if (password !== confirmPassword) {
      setStatusMsg("Passwords do not match");
      setShowPopup(true);
      return;
    }

    const userData = {
      username: username,
      password: password,
      email: email,
    };

    axios
      .post("http://ec2-13-53-129-97.eu-north-1.compute.amazonaws.com:9000/register", userData)
      .then((response) => {
        const message = response.data.message;

        console.log("Message:", message);
        setProcessing(true);

        if (message === "Registration successful") {
          setStatusMsg(message);
          setValid(true);
        } else if (message === "Username already exists") {
          setStatusMsg("The Username already exists");
          setTimeout(() => {
            setProcessing(false);
          }, 2000);
        } else if (message === "An error occurred") {
          setStatusMsg("The registration failed");
          setTimeout(() => {
            setProcessing(false);
          }, 2000);
        } else {
          setStatusMsg("Error Occured");
          setTimeout(() => {
            setProcessing(false);
          }, 2000);
        }
      })
      .catch((error) => {
        setStatusMsg("An error occurred while registering");
      });
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
        <div>
          <div className="blurred"> </div>
          <h1 className="successfully">{statusMsg}</h1>
        </div>
      ) : (
        <div className="signup-container">
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
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="signup-input"
                  placeholder="Confirm Password"
                />
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
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
              <button className="signup-nav-button">Register</button>
            </form>
          </div>
          {showPopup && (
            <div className="popup">
              <p>{statusMsg}</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Signup;
