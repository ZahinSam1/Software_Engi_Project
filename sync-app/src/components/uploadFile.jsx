import { useState } from "react";
import axios from "axios";

function FileUploadForm() {
  const API_EndPoint = "http://localhost:9000/upload/";
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // console.log("the selected file: ", event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    // const formData = new FormData();
    var formData = {
        file: selectedFile
    }
    // formData.append("file", selectedFile);
    console.log(formData.file);
    // Send the form data to the backend
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(selectedFile);

    axios
      .post(API_EndPoint, formData, config)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <input type="file" name="file" onChange={handleFileChange} />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default FileUploadForm;
