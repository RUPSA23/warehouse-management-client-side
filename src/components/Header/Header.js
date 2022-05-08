import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Warehouse</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/manage-items">Manage Items</Nav.Link>
      <Nav.Link href="/add-Items">Add Items</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/logout">Logout</Nav.Link>
 
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;