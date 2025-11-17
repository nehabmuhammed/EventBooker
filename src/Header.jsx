import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Event Booker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link style={{textDecoration:"none",color:"wheat"}} to={'/'}>Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link style={{textDecoration:"none",color:"wheat"}} to={'/admin'}>Admin</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={{textDecoration:"none",color:"wheat"}} to={'event'}>My Events</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header