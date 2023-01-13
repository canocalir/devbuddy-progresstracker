import { SideBarLinkProps } from "../../types/sidebarTypes"
import { SidebarLinkContainer } from "./SidebarLink.styled"

const SidebarLink = ({linkType}: SideBarLinkProps) => {
  return (
    <SidebarLinkContainer>{linkType}</SidebarLinkContainer>
  )
}

export default SidebarLink