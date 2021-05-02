import React, { useState } from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

// Icons
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/bootstrap/Twitter';

const Container = styled.footer`
    display: flex;
    position: relative;
    left: 0;
    bottom: 0;
    background-color: #b72828;
    padding: 5px 10px;
    
    margin-left: auto;
    margin-right:0;
    align-items: center;

   .decoration{
    background-color: #950707;
    border-radius: 30px;
    width: 65px;
    height: 10px; 
    }

    p{
        color: #e3c893;
        font-family: Montserrat, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;
        text-align: center;
    }


   .links{
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: space-between;

    a{
        margin-left: 10px;
        color: white;
    }
    small{
        margin-left: 10px;
        color: white;
    }
  }
`

const FacebookIcon = styled(Facebook)`
  font-size: 35px;
`
const InsIcon = styled(Instagram)`
  font-size: 35px;
`
const TwitterIcon = styled(Twitter)`
  font-size: 35px;
`

const IconCircle = styled.a`
  flex: 0 1 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 50%;
  transition: .3s all ease-in-out;
  color: white;
  &:hover{
    background: #1DA1F2;
  }
  
  .fa{
    font-size: 35px;
  }
`

export const Footer = () => (
    <Container>
        <div className='decoration'></div>
        <div className='links'>
            
            <Link><IconCircle href='#' > <FacebookIcon size = '25' aria-hidden ='true'/> </IconCircle></Link>
            <Link><IconCircle href='#' > <InsIcon size = '25' aria-hidden ='true'/></IconCircle></Link>
            <Link><IconCircle href='#' > <TwitterIcon size = '25' aria-hidden ='true'/></IconCircle></Link>
            <small>Copyright 2021, St.John's Local Guide</small>    
        </div>

    </Container>
  )