import React, { useState, useEffect }, { useState } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
function NavbarPage() {
  return (
    <Navbar expand="lg" className="fixed-top bg-dark bg-opacity-50">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white">
          <div style={{fontSize:"35px"}}>Movielist!</div>
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
                  Login
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
