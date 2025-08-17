import React from "react";
import { Outlet } from "react-router-dom";
import  Footer  from "../UI/Footer";
import  Header  from "../UI/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout; // ✅ this is must!
