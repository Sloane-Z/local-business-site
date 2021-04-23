import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import banner_1 from '../image/street_food.svg';
import eating_together from '../image/eating_together.svg';


const Styles = styled.div`
  .jumbo {
    background-color: #fef3e9;
    height: 300px;
    width: 100%;
    position: relative;
    z-index: -2;
    justify-items: center;
    margin: 0 0;
    padding: 0;
  }


  .landingInfo{
    background: url(${eating_together}) no-repeat center ;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-size: 400px 300px;
    display: flex;
    font-family: 'Poppins', sans-serif;
    z-index: 2;
    justify-content: center;
    text-align: center;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  }

/*
  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  */
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
    <div className = 'landingInfo'>
      <h1>NL Local Business Hub</h1>
    </div>

    </Jumbo>
  </Styles>
)
