import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarelements = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">PortFolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#/resume">Resume</Nav.Link>
            <Nav.Link href="#/Gallery">Gallery</Nav.Link>
            <NavDropdown title="더보기" id="collapsible-nav-dropdown"> 
              <NavDropdown.Item href="#/Gallery">
                Gallery
              </NavDropdown.Item>              
              <NavDropdown.Divider /> 
              <NavDropdown.Item href="#/Project">
                My Project(미완성)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarelements
