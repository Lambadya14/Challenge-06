import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";

function NavbarPage() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const handleSearch = (event) => {
    event.preventDefault();
    if (value) {
      navigate("/search/" + value, { state: value, replace: true });
    }
  };
  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);

  

  return (
    <Navbar expand="lg" className="fixed-top bg-dark bg-opacity-50">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white">
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
            {isLoggedIn ? (
              <>
                <Nav.Item className="text-light font-weight-light d-flex align-items-center">
                  Hi, {user?.name}
                </Nav.Item>
                <Nav.Item className="text-light"></Nav.Item>
                <Button
                  onClick={() => {
                    dispatch(logout(navigate));
                  }}
                  className="text-light"
                  style={{ borderRadius: "25px", width: "100px" }}
                  variant="outline-danger"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  style={{ borderRadius: "25px", width: "100px" }}
                  variant="outline-danger"
                  className="text-light"
                  as={Link}
                  to={"/login"}
                >
                  Login
                </Button>
                <Button
                  style={{ borderRadius: "25px", width: "100px" }}
                  className="text-light bg-danger border-0"
                  as={Link}
                  to={"/register"}
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
