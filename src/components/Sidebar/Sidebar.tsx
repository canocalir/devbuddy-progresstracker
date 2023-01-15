import { FC } from "react";
import SidebarLink from "../SidebarLink/SidebarLink";
import { LogoContainer, SidebarContainer } from "./Sidebar.styled";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
