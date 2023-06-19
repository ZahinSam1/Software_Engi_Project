import React from "react";
import "./navbar.css"; // Import the CSS file
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="vertical-nav">
      <div>
        <p className="dashboard-description">
          SyncApp
        </p>
        <Link to="/">
          <button className="dashboard-button">HOME</button>
        </Link>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Files</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
