import React from "react";
import axios from "axios";

const FolderUploader = () => {
  const handleUpload = async (event) => {
    event.preventDefault();

    const folderInput = event.target.files[0];
    const formData = new FormData();

    // Append the folder input to the form data
    formData.append("folder", folderInput);

    try {
      const response = await axios.post(
        "http://localhost:9000/upload",
        formData
      );
      console.log("Folder uploaded successfully");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading folder:", error);
    }
  };

  return (
    <div>
      <h3>Select a Folder to Upload:</h3>
      <input
        type="file"
        webkitdirectory=""
        onChange={handleUpload}
        id="folder-input"
      />
    </div>
  );
};

export default FolderUploader;
