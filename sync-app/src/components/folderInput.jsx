import { useState } from "react";
import "./folderInput.css";

const FolderInput = () => {
  const [selectedFolder, setSelectedFolder] = useState("");

  const handleFolderSelect = (event) => {
    const folder = event.target.files[0];
    setSelectedFolder(folder ? folder.name : "");

    if (folder) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonData = JSON.parse(e.target.result);
        console.log(jsonData);
      };
      reader.readAsText(folder);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const folder = event.dataTransfer.items[0].getAsFile();
    setSelectedFolder(folder ? folder.name : "");

    if (folder) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonData = JSON.parse(e.target.result);
        console.log(jsonData);
      };
      reader.readAsText(folder);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="folder-input-container">
      <h3>Select a Folder:</h3>
      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop a folder here</p>
      </div>
      <input
        type="file"
        webkitdirectory=""
        onChange={handleFolderSelect}
        id="folder-input"
      />
      <label htmlFor="folder-input" className="browse-button">
        Browse
      </label>
      {selectedFolder && <p>Selected folder: {selectedFolder}</p>}
    </div>
  );
};

export default FolderInput;
