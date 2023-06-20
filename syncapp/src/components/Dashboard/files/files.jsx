
import { useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const FilesComponent = () => {
  const { data, setData } = useState([]);
  const { error, setError } = useState(null);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
  ];

  const fetchData = () => {
    try {
      axios
        .get("https://127.0.0.1:9000/upload")
        .then((response) => {
          console.log(response.data);
        })
        .then((error) => {
          console.log(error);
          setError("no data found");
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return (
      <div>{error}</div>
    )
  }
  return (
    <div className="connected">
      <DataTable
        className="datatable"
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        //  pagination
        // customStyles={customStyles}
      ></DataTable>
    </div>
  );
};

export default FilesComponent;