import {
  NavbarButtonContainer,
  NavbarContainer,
  NavbarLeftContainer,
  NavbarRightContainer,
} from "./Navbar.styled";
import { FC } from "react";
import { Avatar, Button, Dropdown } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const Navbar: FC = () => {
  const isLoggedIn = false; //!Todo Need to be FirebaseAuth

  const loggedInNavbarConditional = isLoggedIn ? (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
        />
      }
      arrowIcon={false}
      inline={true}
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  ) : (
    <NavbarButtonContainer>
      <NavLink to={"/login"}>
        <Button color="purple">Login</Button>
      </NavLink>
      <NavLink to={"/signup"}>
        <Button color="purple">SignUp</Button>
      </NavLink>
    </NavbarButtonContainer>
  );

  return (
    <NavbarContainer>
      <NavbarLeftContainer>
        <Link to={isLoggedIn ? '/dashboard' : '/'}>
        <h1>DevBuddy - Self Progress Tracker</h1>
        </Link>
      </NavbarLeftContainer>
      <NavbarRightContainer>{loggedInNavbarConditional}</NavbarRightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
