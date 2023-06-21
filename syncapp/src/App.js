import React, { useState } from "react";
import Frontpage from "./components/Frontpage/frontpage";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Dashboard from "./components/Dashboard/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./UserContest";
// import TestForm from './test/fetch';
// import FileComponent from './test/files';

const App = () => {
  const [userName, setuserName] = useState("");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{userName, setuserName}}>

        <Routes>
          <Route exact path="/" element={<Frontpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/test" element={<TestForm/>} /> */}
          {/* <Route path="/files" element={<FileComponent/>} /> */}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
