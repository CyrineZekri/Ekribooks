import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../../images/copy.png";

function Header() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="Navigation">
      <Navbar.Brand href="#">
        <img src={logo} alt="EkriBooks Logo" height="30" className="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="Nav" style={{ flex: 1 }} navbarScroll>
          <Nav.Link href="/">Acceuil</Nav.Link>
        </Nav>
        <Form className="formm">
          {(location.pathname === "/" || location.pathname === "/signin") && (
            <Link to="/signup">
              <Button className="bouton">Sign up</Button>
            </Link>
          )}
          {(location.pathname === "/" || location.pathname === "/signup") && (
            <Link to="/signin">
              <Button className="bouton">Sign in</Button>
            </Link>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
