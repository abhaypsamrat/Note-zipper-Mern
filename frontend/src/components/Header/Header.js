import React from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";


function Header() {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>Note-Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/mynotes">
              <Link to="/mynotes">
              My Notes
              </Link>
              </Nav.Link>

            <NavDropdown title="Abhay" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
