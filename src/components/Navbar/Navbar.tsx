import { NavbarContainer, NavbarLeftContainer, NavbarRightContainer } from "./Navbar.styled";
import { FC } from "react";
import { Avatar, Dropdown } from "flowbite-react";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavbarLeftContainer>
        <h1>DevBuddy - Self Progress Tracker</h1>
      </NavbarLeftContainer>
      <NavbarRightContainer>
      <Dropdown
  label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
  arrowIcon={false}
  inline={true}
>
  <Dropdown.Header>
    <span className="block text-sm">
      Bonnie Green
    </span>
    <span className="block truncate text-sm font-medium">
      name@flowbite.com
    </span>
  </Dropdown.Header>
  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Earnings
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item>
    Sign out
  </Dropdown.Item>
</Dropdown>
      </NavbarRightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
