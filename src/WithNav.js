/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { Outlet } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function WithNav() {
  return (
    <>
      <NavBar />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter> */}
      <Outlet />
    </>
  );
}
export default WithNav;
