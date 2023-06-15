import React, { useState } from "react";
import axios from "axios";


const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here, e.g., send registration request to backend
    const userData = {
      username,
      password,
      email,
    };

    // Send registration request to backend API
    axios
      .post("http://localhost:9000/register", userData)
      .then((response) => {
        // Handle successful registration
        console.log("Registration successful", response.data);
        setValid(true)
      })
      .catch((error) => {
        // Handle registration error
        console.error("Registration failed", error);
      });

    // Reset form fields
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return 
    
};

export default RegisterForm;
