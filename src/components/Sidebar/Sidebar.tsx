
import { FC } from 'react'
import SidebarLink from '../SidebarLink/SidebarLink'
import { LogoContainer, SidebarContainer } from './Sidebar.styled'
import logo from "../../assets/logo.svg";

const Sidebar:FC = () => {
  return (
    <SidebarContainer>
        <LogoContainer>
        <img src={logo} alt="logo" />
        </LogoContainer>
      <SidebarLink linkType={'Dashboard'}/>
      <SidebarLink linkType={'Task Management'}/>
      <SidebarLink linkType={'Progress Tracking'}/>
      <SidebarLink linkType={'Feedback'}/>
      <SidebarLink linkType={'Resources'}/>
      <SidebarLink linkType={'Mentorship'}/>
      <SidebarLink linkType={'Reports'}/>
    </SidebarContainer>
  )
}

export default Sidebar