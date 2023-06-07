import { useState } from "react";
import axios from "axios";

const Fetch_API = () => {
  const [data, setData] = useState("");

  axios
    .get("http://localhost:9000/testAPI")
    .then((response) => response)
    .then((response) => setData(response.data));
  return (
    <div>
      <h1>This is fetch api testing</h1>
      <p>{data === '' ? "no data found" : data}</p>
    </div>
  );
};


export default Fetch_API;