import { useState } from "react";
import "./navbar.css"; // Import the CSS file
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Navbar = ({ onFilesClick, onSettingsClick, onHomeClick }) => {
  return (
    <div className="vertical-nav">
      <div>
        <p className="dashboard-description">SyncApp</p>
      </div>
      <ul>
        <li>
          <button onClick={onHomeClick} className="navbar-button">Home</button>
        </li>
        <li>
          <button onClick={onFilesClick} className="navbar-button">Files</button>
        </li>
        <li>
          <button onClick={onSettingsClick} className="navbar-button">Settings</button>
        </li>
        <li>
          <button className="navbar-button">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
