import styled from "styled-components";

const SidebarContainer = styled.div`
    display: flex;
    background-color: #7461a0;
    position: fixed;
    padding-top: 1rem;
    height: 100vh;
    width: 15rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 99;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: #ffffff;
`

export {SidebarContainer, LogoContainer}