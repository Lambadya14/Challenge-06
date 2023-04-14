import React from "react";
import { Container, Button, Navbar, Nav, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavbarPage() {
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    navigate("/search", { state: { query } });
  };
  return (
    <Navbar  expand="lg" className="fixed-top bg-black bg-opacity-25">
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
              placeholder="What do you want to watch?"
              className="me-2 bg-transparent rounded-5 border-danger"
              aria-label="Search"
              variant="outline-danger"
              name="query"
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
