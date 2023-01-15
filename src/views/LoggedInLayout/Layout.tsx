import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const LoggedInLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  );
};

export default LoggedInLayout;
