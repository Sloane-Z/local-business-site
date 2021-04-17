import React from 'react'
import styled, { css } from 'styled-components';
import { Card, Button } from 'react-bootstrap';


export const Style = styled.div`
    background-color: #fef3e9;
`

export const Grid = styled.div`
    display: grid;
    padding: 5% 10%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 500px;
    grid-gap: 60px;
`;

export const Item = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    padding: .5rem;
    color: black;
    background-color: pink;


    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;

    align-items: center;
    align-items: flex-end;
    overflow: hidden;
    padding: 1rem;
    width: 100%;
    text-align: center;
    color: whitesmoke;
    background-color: whitesmoke;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
        0 2px 2px rgba(0,0,0,0.1), 
        0 4px 4px rgba(0,0,0,0.1), 
        0 8px 8px rgba(0,0,0,0.1),
        0 16px 16px rgba(0,0,0,0.1);
  
  @media (min-width: $bp-md) {
    height: 350px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(var(--d) * 1.5) var(--e);
    pointer-events: none;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.320) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.540) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.790) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(var(--d) * 2) var(--e);
  }
  
    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }

`;




const CategorySection = ({category}) => {
    return (
        <Style>
            <Grid>
                {category.map(
                    (item, index) =>(
                        <Item>
                            <h1>{item.title}</h1>
                            <p>{item.paragraph}</p>

                        </Item>
                    )
                )}
        </Grid>
        </Style>




    )
}

export default CategorySection
