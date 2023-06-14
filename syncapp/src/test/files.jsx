// import { FcFolder, FcFile } from "react-icons/fc";
import "./files.css";
import FileStruct from "./fileStructure";

const FileComponent = ({ folderName, folderContent }) => {
  // if (folderName === undefined) {
  //   folderName = "Folder Name";
  // }
  const folderData = {
    name: "Folder 1",
    type: "folder",
    children: [
      {
        name: "Subfolder 1",
        type: "folder",
        children: [
          {
            name: "File 1",
            type: "file",
          },
          {
            name: "File 2",
            type: "file",
          },
        ],
      },
      {
        name: "Subfolder 2",
        type: "folder",
        children: [
          {
            name: "File 3",
            type: "file",
          },
        ],
      },
      {
        name: "File 4",
        type: "file",
      },
    ],
  };

  return (
    // <div className="FolderIconContainer">
    //   <FcFolder className="FolderIcon" />
    //   <span className="FolderName">{folderName}</span>
    // </div>
    <FileStruct data={folderData} />
  );
};

export default FileComponent;
