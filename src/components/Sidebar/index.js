/* eslint-disable react/jsx-no-undef */
import React from "react"
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarLinks,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements"
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="Sorting" onClick={toggle}>
            to Sort
          </SidebarLinks>

          <SidebarLinks to="Pathfinding" onClick={toggle}>
            to Pathfind
          </SidebarLinks>
          <SidebarLinks to="About" onClick={toggle}>
            About
          </SidebarLinks>
          <SidebarLinks to="Contact" onClick={toggle}>
            Contact
          </SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
