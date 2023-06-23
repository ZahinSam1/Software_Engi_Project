import { useState, useEffect } from "react";
import "./navbar.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Navbar = ({ onFilesClick, onSettingsClick, onHomeClick }) => {
  const [logout, setLogout] = useState(false);

  return (
    <div className="vertical-nav">
      <div>
        <p className="dashboard-description">SyncBridge</p>
      </div>
      <ul>
        <li>
          <button onClick={onHomeClick} className="navbar-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={onFilesClick} className="navbar-button">
            Files
          </button>
        </li>

        <li>
          <Link to="/login">
            <button
              className="navbar-button"
              onClick={() => {
                localStorage.removeItem("username");
              }}
            >
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
