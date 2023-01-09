import styled from "styled-components";
import { theme } from "../../styles/theme";

const NavbarContainer = styled.div`
    background-color: ${theme.navbarColor};
    height: 4rem;
    color: #ffffff;
    display: flex;
    align-items:center;
    justify-content: space-around;
`

const NavbarLeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavbarRightContainer = styled(NavbarLeftContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export {NavbarContainer, NavbarLeftContainer, NavbarRightContainer}