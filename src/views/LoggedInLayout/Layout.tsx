import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const LoggedInLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <MainWrapper>
      <Sidebar />
      {children}
      </MainWrapper>
    </>
  );
};

export default LoggedInLayout;


const MainWrapper = styled.div`
  display: flex;
  background-color: #f3f3f3;
`
