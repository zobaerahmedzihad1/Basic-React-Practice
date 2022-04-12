import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="ms-auto">
          <NavLink className='link' to="/">Home</NavLink>
          <NavLink className='link' to="/services">Services</NavLink>
          <NavLink className='link' to="/about">About</NavLink>
          <NavLink className='link' to="/contract">Contract</NavLink>
          <NavLink className='link' to="/login">Login</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
