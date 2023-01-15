import { FC } from "react";
import SidebarLink from "../SidebarLink/SidebarLink";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const sidebarElements = [
  {
    title: "Dashboard",
    link: "/dashboard"
  },
  {
    title: "Task Management",
    link: "/taskmanagement",
  },
  {
    title: "Progress Tracking",
    link: "/progresstracker",
  },
  {
    title: "Feedback",
    link: "/feedback",
  },
  {
    title: "Resources",
    link: "/resources",
  },
  {
    title: "Mentorship",
    link: "/mentorship",
  },
  {
    title: "Reports",
    link: "/reports",
  },
];

const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      {sidebarElements?.map((el, id) => {
        return (
          <Link to={el.link} key={id}>
            <SidebarLink linkType={el.title} />
          </Link>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;


const SidebarContainer = styled.div`
    display: flex;
    background-color: #7461a0;
    padding-top: 5rem;
    height: 100vh;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 1;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: #ffffff;
`
