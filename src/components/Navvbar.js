import React from "react";
import "./Navvbar.css";
import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../Images/labelboxlogo.svg";

const Navvbar = () => {
  return (
    <div className="navbar">
      <Navbar sticky="top" bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand className="ml-4">
            <img
              src={Logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto size-lg">
            <LinkContainer to="/product">
              <Nav.Link>Product</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/solution">
              <Nav.Link>Solution</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/learn">
              <Nav.Link>Learn</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/academic">
              <Nav.Link>Academic</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/company">
              <Nav.Link>Company</Nav.Link>
            </LinkContainer>
            <NavDropdown title="section" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                new Section
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another Section
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Important Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated Section
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button className="mr-2" variant="light">
            Login
          </Button>
          <Button className="mr-4" variant="primary">
            Get Demo
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navvbar;
