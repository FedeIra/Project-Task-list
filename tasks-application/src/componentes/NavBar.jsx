import React from 'react';
import style from '../hojas-de-estilo/NavBar.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as RouteLink, useNavigate } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`
      navbar
      fixed-top
      ${style.navbar_container}`}
    >
      <Container
        color="white"
        style={{
          marginLeft: '5%',
          width: '100%',
        }}
      >
        <Nav>
          <Nav.Link
            className="nav-link"
            style={{
              color: 'white',
              marginLeft: '15px',
            }}
            href="#logIn"
          >
            <RouteLink
              to="/register"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Register
            </RouteLink>
          </Nav.Link>
          <Nav.Link
            className="nav-link "
            style={{ color: 'white', marginLeft: '15px' }}
          >
            <RouteLink
              to="/log-in"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Log In
            </RouteLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
