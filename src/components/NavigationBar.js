import React, {Component} from 'react';
import {Link} from 'react-scroll';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background: #fef3e9;

  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;
    font-family: 'Poppins', sans-serif;

    &:hover {
      color: black;
    }
  }
`;




export const NavigationBar = () => (

  <Styles>
    <Navbar expand="lg" >
      <Navbar.Brand href="/">NL Local Bussiness Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">

          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
            <Link to='category' spy={true} smooth={true}>Category</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
          <Nav.Link>
              <Link to='contact' spy={true} smooth={true}>Contact</Link>
              </Nav.Link> 
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
