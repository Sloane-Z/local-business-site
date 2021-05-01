import React, {Component} from 'react';
import {Link} from 'react-scroll';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`

  .navbar {
    position: relative;
    padding-top:1% !important;
    padding-bottom:1% !important;
    background-image: none;
    border-bottom: 1px solid #000;
    transition: all 300ms linear;
  }
  .navbar-brand{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    height:25px;
    font-size:1.6rem;
    font-family:'Poppins',sans-serif;
  }
  .nav-item{
    position: relative;
    transition: all 200ms linear;
  }
  .nav-item:hover .nav-link{
	  color: #8167a9 !important;
  }
  .nav-item.active .nav-link{
	  color: #777 !important; 
  }
  .nav-item:after{
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    content: '';
    background-color: #8167a9;
    opacity: 0;
    transition: all 200ms linear;
  }
  .nav-item:hover:after{
    bottom: 0;
    opacity: 1;
  }
  .nav-item.active:hover:after{
    opacity: 0;
  }

  .nav-link {
    color: #212121 !important;
	  font-weight: 500;
    transition: all 200ms linear;
    font-family: 'Poppins', sans-serif;
	  font-size: 16px;
    position: relative;
    margin: 0 2px 0 2px;
    display: inline-block;
    
    &:hover {
      color: black;
    }
  }



`;

const Divider=styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: black;
`


export const NavigationBar = () => (

  <Styles>   
    <Navbar expand="lg">
      <Navbar.Brand href="/">St.John's Local Guide</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">

          <Nav.Item>
            <Nav.Link>
            <Link to='category' spy={true} smooth={true}>Category</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
          <Nav.Link>
              <Link to='contact' spy={true} smooth={true}>Contact Us</Link>
              </Nav.Link> 
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </Styles >
  
)
