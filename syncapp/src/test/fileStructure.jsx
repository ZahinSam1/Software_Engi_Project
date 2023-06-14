import React from "react";
import { FcFolder, FcFile } from "react-icons/fc";
import "./files.css";

const FileStruct = ({ data }) => {
  const renderFolders = (items) => {
    return items.map((folder) => {
      return (
        <div>
          <div className="FolderIconContainer">
            <FcFolder className="FolderIcon" />
            <span className="FolderName">{folder.name}</span>
          </div>
        </div>
      );
    });
  };

  return <div className="FileComponent">{renderFolders(data)}</div>;
};

export default FileStruct;
