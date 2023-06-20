// import React from "react";
// import "./connected.css"; // Import the CSS file
// import DataTable from "react-data-table-component";

// const Connected = () => {
//   // const columns = [
//   //   {
//   //     name: "Name",
//   //     selector: (row) => row.name,
//   //     sortable: true
//   //   },
//   //   {
//   //     name: "Email",
//   //     selector: (row) => row.email,
//   //     sortable: true
//   //   },
//   //   {
//   //     name: "Age",
//   //     selector: (row) => row.age,
//   //     sortable: true
//   //   },
//   // ];
//   // const data = [
//   //   {
//   //     id: 1,
//   //     name: "shanila",
//   //     email: "shanila@gmail.com",
//   //     age: "22",
//   //   },
//   //   {
//   //       id: 2,
//   //       name: "zahin",
//   //       email: "zahin@gmail.com",
//   //       age: "23",
//   //     },
//   //     {
//   //       id: 3,
//   //       name: "sunaira",
//   //       email: "sunaira@gmail.com",
//   //       age: "21",
//   //     },
//   //     {
//   //       id: 4,
//   //       name: "toha",
//   //       email: "toha@gmail.com",
//   //       age: "22",
//   //     },
//   //     {
//   //       id: 5,
//   //       name: "farasha",
//   //       email: "farasha@gmail.com",
//   //       age: "22",
//   //     },

//   // ];

//   // const customStyles = {
//   //   rows: {
//   //     style: {
//   //       fontFamily: "Arial, sans-serif",
//   //       fontSize: "14px",
//   //       fontWeight: "bold",
//   //       color: "#333",
//   //     },
//   //   },
//   // };

//   return (
//     <div className="connected">
//       {/* <DataTable className="datatable"
//       columns={columns}
//       data={data}
//       selectableRows
//      fixedHeader
//     //  pagination
//     customStyles={customStyles}
//       ></DataTable> */}

//       <div>
//         <h1>Names</h1>
//       </div>
//       <div>
//         <h1>Sizes</h1>
//       </div>
//       <div>
//         <h1>Dates</h1>
//       </div>
//       <div>
//         <button>
//           button
//         </button>
//       </div>
//     </div>
//   );

// };

// export default Connected;
// // email and deviuce connected map method
// // .map function usage in javascript

import { useState } from "react";
import "./connected.css"; // Import the CSS file
import DataTable from "react-data-table-component";
import axios from "axios";

const Connected = () => {
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

export default Connected;
