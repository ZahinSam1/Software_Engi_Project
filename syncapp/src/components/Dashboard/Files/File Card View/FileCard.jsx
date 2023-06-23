import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../../../UserContext";
import "./FileCard.css";
import { AiOutlineFileText } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { TbDownload } from "react-icons/tb";
import { MdDownloadDone, MdDelete } from "react-icons/md";

const formatFileSize = (bytes) => {
  if (bytes < 1024) {
    return bytes + " B";
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes < 1024 * 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  } else {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  }
};

const FileCard = ({ fileData }) => {
  const [showContent, setShowContent] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const name = fileData.file.name;
  const type = fileData.file.mimetype;
  // const encoding = fileData.file.encoding;
  const size = formatFileSize(fileData.file.size);
  const data = fileData.file.data;

  const { userName, setUserName } = useContext(UserContext);

  const URL =
    "http://ec2-13-53-129-97.eu-north-1.compute.amazonaws.com:9000/upload/delete";
  // const URL = "http://localhost:9000/upload/delete";

  const handleDoubleClick = (event) => {
    event.preventDefault();
    if (type === "text/plain") {
      if (!showContent) {
        const decodedData = atob(data);
        setShowContent(decodedData);
      } else {
        setShowContent(false);
      }
    } else if (type.includes("image")) {
      if (!showContent) {
        const imageData = `data:${type};base64,${data}`;
        setShowContent(imageData);
      } else {
        setShowContent(false);
      }
    }
  };

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    let saveData;
    if (type.includes("image")) {
      saveData = `data:${type};base64,${data}`;
    } else {
      const mimetype = type || "text/plain";
      const decodedData = atob(data);
      const blob = new Blob([decodedData], { type: mimetype });
      saveData = URL.createObjectURL(blob);
    }

    link.href = saveData;
    link.download = name;

    // Simulate a click on the link to start the download
    link.click();

    setTimeout(() => {
      window.URL.revokeObjectURL(link.href);
      link.remove();
      setIsDownloaded(true);
      setTimeout(() => {
        setIsDownloaded(false);
      }, 4000);
    }, 100);
  };

  const handleDelete = () => {
    axios
      .delete(`${URL}/${fileData._id}/${userName}`)
      .then((responnse) => {
        console.log(responnse.data);
        setIsDeleted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="fileCard-container">
      <div className="fileCard-image" onDoubleClick={handleDoubleClick}>
        {type === "text/plain" ? (
          <AiOutlineFileText size={100} />
        ) : (
          <BsImage /> && (
            <img
              className="img-container"
              src={`data:${type};base64,${data}`}
              alt="File Icon"
            />
          )
        )}
      </div>
      <div className="file-details">
        <div className="fileCard-name">{name}</div>
        <div className="fileCard-size">Size: {size}</div>
        <div className="file-actions">
          <div className="action-button" onClick={handleDownload}>
            {isDownloaded ? <MdDownloadDone /> : <TbDownload />}
          </div>
          <div
            className={isDeleted ? "delete-button" : "delete-button normal"}
            onClick={handleDelete}
          >
            <MdDelete />
          </div>
        </div>
      </div>
      {showContent && (
        <div
          className="file-content-container"
          onClick={() => {
            setShowContent(false);
          }}
        >
          <div className="file-content-name">
            <p>{name}</p>
          </div>
          {type === "text/plain" ? (
            <div className="file-content">{showContent}</div>
          ) : (
            <img src={`data:${type};base64,${data}`} alt="None" />
          )}
        </div>
      )}
    </div>
  );
};

export default FileCard;
