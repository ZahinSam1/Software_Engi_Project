import React from 'react';

const Navbar = () => {
  const handleHomepageClick = () => {
    console.log('Homepage clicked');
  };

  const handleFilesClick = () => {
    console.log('Files clicked');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  const handleLogoutClick = () => {
    console.log('Logout clicked');
  };

  return (
    <div>
      <h2>Below is the navbar</h2>
      <ul>
        <li onClick={handleHomepageClick}>Homepage</li>
        <li onClick={handleFilesClick}>Files</li>
        <li onClick={handleSettingsClick}>Settings</li>
        <li onClick={handleLogoutClick}>Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;