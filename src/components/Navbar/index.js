/* eslint-disable react/jsx-no-undef */
import React from "react";
import { FaBars } from "react-icons/fa";
import {
  NavLogo,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLinkR,
  NavMenu,
  MobileIcon,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {};

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
              <NavLinkR
                to="SortingApp"
                smooth={true}
                duration={500}
                spy={true}
                exaact="true"
                offset={-50}
              >
                to Sorting
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR
                to="Theory"
                smooth={true}
                duration={500}
                spy={true}
                exaact="true"
                offset={-50}
              >
                to Theory + Programs
              </NavLinkR>
            </NavItem>

            <NavItem>
              <NavLinkR
                to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                exaact="true"
                offset={-50}
              >
                Contact
              </NavLinkR>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
