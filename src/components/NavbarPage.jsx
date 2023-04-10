import React from "react";
import { Container, Button, Navbar, Nav, Form } from "react-bootstrap";
function NavbarPage() {
  return (
    <Navbar bg="transparent" expand="lg" className="fixed-top">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white">
          Movielist!
        </Navbar.Brand>
        <Navbar.Collapse
          id="navbarScroll"
          className="d-flex justify-content-between "
        >
          <Nav style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 bg-transparent"
              aria-label="Search"
              variant="outline-danger"
            />
          </Form>
          <div className="d-flex gap-2">
            <Button variant="outline-danger">Login</Button>
            <Button className="bg-danger border-0">Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
