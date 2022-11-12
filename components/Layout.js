import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Layout;
