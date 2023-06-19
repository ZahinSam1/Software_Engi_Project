import React, { useState, useEffect } from "react";
import "./update.css"; // Import the CSS file
import DataTable from "react-data-table-component";
// map method
// data from backend
// api to json and map
const SyncUpdate = () => {
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
  const data = [
    {
      id: 1,
      name: "shanila",
      email: "shanila@gmail.com",
      age: "22",
    },
    {
      id: 2,
      name: "zahin",
      email: "zahin@gmail.com",
      age: "23",
    },
    {
      id: 3,
      name: "sunaira",
      email: "sunaira@gmail.com",
      age: "21",
    },
    {
      id: 4,
      name: "toha",
      email: "toha@gmail.com",
      age: "22",
    },
    {
      id: 5,
      name: "farasha",
      email: "farasha@gmail.com",
      age: "22",
    },
  ];
  const customStyles = {
    rows: {
      style: {
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#333",
      },
    },
  };

  return (
    <div className="update">
      <DataTable
        className="datatable"
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        //  pagination
        customStyles={customStyles}
      ></DataTable>
    </div>
  );
};

export default SyncUpdate;
