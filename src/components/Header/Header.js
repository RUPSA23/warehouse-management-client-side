import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
const auth = getAuth(app);


const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user.email);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Warehouse</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      {
          user?.uid 
          ?
          <div style={{display: 'flex'}}>
          <Nav.Link href="/add-Items">Add Items</Nav.Link>
          <Nav.Link href="/manage-items">Manage Items</Nav.Link>
          <Nav.Link href="/my-items">My Items</Nav.Link>
          <Nav.Link href="/logout" onClick={()=> signOut(auth)}>Logout</Nav.Link>
        </div>
          :
          <div style={{display: 'flex'}}>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/registration">Register</Nav.Link>
          </div>
         
        }
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;