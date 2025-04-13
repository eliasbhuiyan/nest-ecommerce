import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navigation from "./Navigation";
const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
