import React, { useState } from "react";
import axios from "axios";

function FileUploadForm2() {
  const API_EndPoint = "http://localhost:9000/upload";
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    const files = event.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i]);
    }
    sendFiles(formData);
  };

  const sendFiles = async (formData) => {
    try {
      const response = await axios.post(API_EndPoint, formData);
      const { status, message } = response.data;
      setStatus(status);
      setMessage(message);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>React File Uploader</h1>
      <form>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          multiple
        />
        <button>Upload</button>
      </form>
      <h2>Status: {status}</h2>
      <h3>{message}</h3>
    </div>
  );
}

export default FileUploadForm2;
