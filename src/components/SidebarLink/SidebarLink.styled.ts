import styled from "styled-components";

const SidebarLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #ffffff;
    padding: 1rem;
    color: #ffffff;
    &:hover{
        background-color: #97469e;
        cursor: pointer;
        transition: 300ms ease-in;
    }
`

export {SidebarLinkContainer}