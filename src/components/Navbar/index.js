/* eslint-disable react/jsx-no-undef */
import React from "react"
import { FaBars } from "react-icons/fa"
import {
  NavLogo,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./NavbarElements"

const Navbar = ({ toggle }) => {
  const toggleHome = () => {}

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            toAlgo
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="Pathfinding"
                smooth={true}
                duration={500}
                spy={true}
                exaact="true"
                offset={-50}
              >
                to Pathfind
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Sorting"
                smooth={true}
                duration={500}
                spy={true}
                exaact="true"
                offset={-50}
              >
                to Sort
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="About"
                smooth={true}
                duration={500}
                spy={true}
                exaact="true"
                offset={-50}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                exaact="true"
                offset={-50}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
