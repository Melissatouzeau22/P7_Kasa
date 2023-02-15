import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../Layout/normalize.css";
import "../Layout/Layout.css";

const Layout = () => {
  return (
    <div className="mainContener">
      <div className="body">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
