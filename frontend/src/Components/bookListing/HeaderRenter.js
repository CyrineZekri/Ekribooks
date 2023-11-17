// component.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/copy.png';

import './ContentStyle.css';

function HeaderRenter() {
  return (
    <Navbar expand="lg" className="Navigation">
      <Navbar.Brand href="#">
          <img
            src={logo}
            alt="EkriBooks Logo"
            height="30"
            className="logo"
          />
        </Navbar.Brand>        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="Nav"
            style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
            <Nav.Link href="#action1">Books</Nav.Link>
          </Nav>
          <Form className="form">
            <Button className="Button">Log out</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderRenter;