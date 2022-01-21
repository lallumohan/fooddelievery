import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header() {
  return <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Foodhub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#dishes">Food</Nav.Link>
            <Nav.Link href="/register">Pricing</Nav.Link>
          </Nav>
       </Navbar.Collapse>
              </Container>
            </Navbar>
  </div>;
}
