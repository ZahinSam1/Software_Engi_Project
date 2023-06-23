import { useEffect, useState, useContext } from "react";
import UserContext from "../../../UserContext";
import axios from "axios";
import FileCard from "./File Card View/FileCard";
import "./Files.css";
import FileUpload from "./File Upload/FileUpload";

const Files = () => {
  const [data, setData] = useState([]);
  const { userName, setuserName } = useContext(UserContext);
  console.log("UserName in file: ", userName);
  const URL = "http://ec2-13-53-129-97.eu-north-1.compute.amazonaws.com:9000/upload/data";
  // const URL = "http://localhost:9000/upload/data";
  useEffect(() => {
    axios
      .get(`${URL}/${userName}`)
      .then((response) => {
        console.log(response.data);
        const filteredData = response.data.filter((item) => item !== undefined);
        setData(filteredData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userName]);

  return (
    <div>
      <h1 className="dashboard-title">FILES</h1>
      <FileUpload />
      <div className="Files">
        {data &&
          data.map((item) => {
            return (
              <div key={item._id} className="file-item">
                <FileCard fileData={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Files;
