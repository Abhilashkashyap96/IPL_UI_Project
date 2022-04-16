import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Icon } from '@iconify/react';

function NavbarComp () {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="transparent">
          <Navbar.Brand href="#home">IPL <Icon icon="bxs:cricket-ball" /> Fantacy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              
            </Nav>
            <Nav>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
                <Link to="/user-login">User Login</Link>
                {/*  */}
                  <Link to={"/admin-login"}>
                  Admin Login
                  </Link> 
                {/* */}
                <NavDropdown.Item href="#action/3.3">
                  Guest Login
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            <NavDropdown title="Registration" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">User Registration</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Admin Registration
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
