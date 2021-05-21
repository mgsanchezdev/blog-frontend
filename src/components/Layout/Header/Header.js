import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';

const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Posts</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/create">Crear un post</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
    )

export default Header
