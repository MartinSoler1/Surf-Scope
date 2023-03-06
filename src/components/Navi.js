import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navi = () => {
  return (
    <Navbar className="navbar navbar-light p-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><h1>Surf scope</h1><p>Come with us to explore the world hotest surf destinations.</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link>
            <Link className="text-decoration-none text-white h4 p-3" to="/spots">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-decoration-none text-white h4 p-3" to="/about">
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-decoration-none text-white h4 p-3" to="/contact">
              Contact Us
            </Link>
          </Nav.Link>
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>  )
}

export default Navi