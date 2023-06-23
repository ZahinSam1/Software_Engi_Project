import { useState, useContext } from "react";
import UserContext from "../../../../UserContext";
import "./FileUpload.css";
import axios from "axios";

const FileUpload = () => {
  const [data, setData] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { userName, setuserName } = useContext(UserContext);
  const URL = "http://ec2-13-53-129-97.eu-north-1.compute.amazonaws.com:9000/upload"
  // const URL = "http://localhost:9000/upload";

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setData(selectedFile);
    setUploadProgress(0);
  };
  const handleSubmit = () => {
    if (data) {
      const formData = new FormData();
      formData.append("file", data);
      console.log(data);

      axios
        .post(`${URL}/${userName}`, formData, {
          onUploadProgress: async (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            for (let i = uploadProgress; i <= progress; i++) {
              setUploadProgress(i);
            }
          },
        })
        .then((response) => {
          // Handle successful upload
          console.log("File uploaded successfully", response);
          setData(null);
          setUploadProgress(0);
        })
        .catch((error) => {
          // Handle upload error
          console.error("File upload failed", error);
        });
    } else {
      console.log("No file selected");
    }
  };
  return (
    <div>
      <form
        method="post"
        action="upload"
        encType="multipart/form-data"
        className="uploadForm"
      >
        <div className="inputWrapper">
          <input
            className="fileInput"
            type="file"
            onChange={handleFileUpload}
          />
          <div>{data ? data.name : "Select a File"}</div>
        </div>
        <div className="upload">
          <button className="uploadbutton" type="button" onClick={handleSubmit}>
            Upload Files
          </button>
        </div>
      </form>
      <div>Upload Progress: {uploadProgress}%</div>
    </div>
  );
};

export default FileUpload;
