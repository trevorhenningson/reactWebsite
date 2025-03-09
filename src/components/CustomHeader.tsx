// // Header.jsx
// import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const CustomHeader = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Trevor Henningson
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/work">
              Work Experience
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomHeader;
