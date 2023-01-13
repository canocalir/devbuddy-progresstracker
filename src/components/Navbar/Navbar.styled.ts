import styled from "styled-components";
import { theme } from "../../styles/theme";

const NavbarContainer = styled.div`
    background: ${theme.navbarColor};
    height: 4rem;
    color: #ffffff;
    display: flex;
    align-items:center;
    justify-content: space-around;
    width: 100%;
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

const NavbarButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export {NavbarContainer, NavbarLeftContainer, NavbarRightContainer, NavbarButtonContainer}