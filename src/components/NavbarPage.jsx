import React, { useState } from "react";
import { Container, Button, Navbar, Nav, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function NavbarPage() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (value) {
      navigate("/movie/search/" + value, { state: value, replace: true });
    }
  };
  return (
    <Navbar bg="transparent" expand="lg" className="fixed-top">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white">
          <div style={{ fontSize: "35px" }}>Movielist!</div>
        </Navbar.Brand>
        <Navbar.Collapse
          id="navbarScroll"
          className="d-flex justify-content-between "
        >
          <Nav style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex " onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 bg-transparent rounded-5 border-danger"
              aria-label="Search"
              variant="outline-danger"
              style={{ color: "white" }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Form>
          <div className="d-flex gap-2">
            <Button
              style={{ borderRadius: "25px", width: "100px" }}
              variant="outline-danger"
            >
              Login
            </Button>
            <Button
              style={{ borderRadius: "25px", width: "100px" }}
              className="bg-danger border-0"
            >
              Register
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
