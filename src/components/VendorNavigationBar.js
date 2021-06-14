import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Nav, Navbar } from 'react-bootstrap';
import { categoryData } from '../data/categoryData';

const Styles = styled.div`

  .navbar {
    position: relative;
    background-image: none;
    transition: all 300ms linear;
    padding: 2% 0% 2% 0%;
    backdrop-filter: blur(25px);
    

  }
  .navbar-brand{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;

    font-family:'Poppins',sans-serif;
    font-size: clamp( 0.7rem, 10vw, 1.6rem);
    @media screen and (max-width: 768px){
      position: relative;
    }
  }

  .nav-item{
    position: relative;
    transition: all 200ms linear;
    justify-content: center;
    align-items: center;
    text-align: center;
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

const Wrapper = styled.div`
	opacity: 1;
	padding: 20px 0;
	box-shadow: 0 10px 30px 0 rgba(138, 155, 165, 0.15);

  position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000;

  padding: 0;
  box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.75);
  :scroll-behavior{
    height: 24px;
  }
`

export const VendorNavigationBar = ({setSelectedCategory}) => {
  const onCategoryClicked = (i) => {
    setSelectedCategory(i);
    //clickToScroll();
  } 
  return(
  <Styles>
    <Wrapper>
       
    <Navbar expand="lg">
      <Navbar.Brand href="/" >St.John's Local Guide</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
    
    </Wrapper>  
  </Styles >
  )
            }
