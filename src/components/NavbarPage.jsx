import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function NavbarPage() {
  const [user, setUser] = useState("");
  const [value, setValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    if (value) {
      navigate("/search/" + value, { state: value, replace: true });
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      const getMe = async () => {
        try {
          const token = localStorage.getItem("token");

          const response = await axios.get(
            `${process.env.REACT_APP_API_KEY}/v1/auth/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const data = response.data.data;

          setUser(data);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            // If not valid token
            if (error.response.status === 401) {
              localStorage.removeItem("token");
              // Temporary solution
              return (window.location.href = "/");
            }

            toast.error(error.response.data.message);
            return;
          }
          toast.error(error.message);
        }
      };

      getMe();
    }
  }, []);

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
                <Nav.Item className="text-light">|</Nav.Item>
                <Nav.Link
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                    return navigate("/");
                  }}
                  className="text-light"
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link className="text-light" as={Link} to={"/login"}>
                  <Button variant="danger" className="rounded-5">
                    Login
                  </Button>
                </Nav.Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
