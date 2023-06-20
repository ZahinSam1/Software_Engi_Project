import React, { useState } from "react";
import "./settings.css"; // Import the CSS file

const SettingsComponent = () => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("option1");

  const handleOption1Change = () => {
    setOption1(!option1);
  };

  const handleOption2Change = (e) => {
    setOption2(e.target.value);
  };

  const handleOption3Change = (e) => {
    setOption3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the settings data
    console.log("Settings submitted:", { option1, option2, option3 });
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="settings-section">
          <h3>Option 1</h3>
          <div className="settings-option">
            <label>
              <input
                type="checkbox"
                checked={option1}
                onChange={handleOption1Change}
              />
              Enable Option 1
            </label>
          </div>
        </div>
        <div className="settings-section">
          <h3>Option 2</h3>
          <div className="settings-option">
            <label>Option 2:</label>
            <input
              type="text"
              value={option2}
              onChange={handleOption2Change}
              className="settings-input"
            />
          </div>
        </div>
        <div className="settings-section">
          <h3>Option 3</h3>
          <div className="settings-option">
            <label>
              <input
                type="radio"
                value="option1"
                checked={option3 === "option1"}
                onChange={handleOption3Change}
              />
              Option 1
            </label>
            <label>
              <input
                type="radio"
                value="option2"
                checked={option3 === "option2"}
                onChange={handleOption3Change}
              />
              Option 2
            </label>
          </div>
        </div>
        <div className="settings-section">
          <button type="submit" className="settings-button">
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsComponent;
