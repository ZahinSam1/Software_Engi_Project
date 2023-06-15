import { useEffect, useState } from "react";
import './displayData.css'
import axios from "axios";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/upload/data");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderFile = (file) => {
    const { mimetype, name } = file;

    if (mimetype.startsWith("image/")) {
      const base64Data = btoa(
        String.fromCharCode(...new Uint8Array(data.buffer))
      );
      const imageUrl = `data:${mimetype};base64,${base64Data}`;
      return <img src={imageUrl} alt={name} />;
    } else {
      return <img src={CiImageOn} alt="File" />;
    }
  };

  return (
    <div>
      <h2>Data from MongoDB</h2>
      {data.map((item) => (
        <div key={item._id} className="fileShow">
          {renderFile(item.file)}
          <h3>Name: {item.file.name}</h3>
          <p>Size: {item.file.size}</p>
          {/* Render other file properties as needed */}
        </div>
      ))}
    </div>
  );
}

export default DataDisplay;
