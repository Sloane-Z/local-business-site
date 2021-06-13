import React from 'react'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

export const Style = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: #fef3e9;
    .container{
        padding-top:5%;


    }
    .link{
        height:100%;
        width:100%;
    }
`

export const Grid = styled.div`
    display: grid;
    padding: 5% 0;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 350px;
    grid-gap: 60px;
    position: relative;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: 350px 350px 350px;
        margin-top:5%;
        margin-left: 5%;
        margin-right:5%;
    }

`;

const CategoryImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-width:100%;
    max-height:100%;
    margin: auto;
    display: block;
    z-index: -2;
    transition:ease-in-out 0.3s;
    
`

const CategoryTitle = styled.div`
    height: 80%;
    h1{
        position:relative;
        text-align: right;
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

    }
    h1::before {  
        transform: scaleX(0);
        transform-origin: bottom right;
        content: " ";
        display: block;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        inset: 0 0 0 0;
        background:		hsl(240, 100%, 95%);
        z-index: -1;
        transition: transform .3s ease;
    }

    h1:hover::before{
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`
export const Item = styled.div`
    display: flex;
    box-sizing: border-box;    
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: white;
    z-index: 10;
    max-width: 1000px;

    align-items: flex-end;
    overflow: hidden;
    padding: 1rem;
    height:100%;
    width:100%;
    border-radius:10px;
    border: 2px solid #ccc;

    :hover{
        box-shadow:6px 11px 15px 4px rgba(0,0,0,0.82);
        transition-timing-function: ease-in-out;
        cursor: pointer;

        &> ${CategoryImage} {
            transform: scale(1.2);
            transition:ease-in-out 0.3s;
        }
    }

    :active{
        -moz-box-shadow:    inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow:         inset 0 0 10px #000000;
    }
    :target{

        -moz-box-shadow:    inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow:         inset 0 0 10px #000000;
    }

    -moz-box-shadow: ${({ current, selectedCategory }) => (current===selectedCategory ? "inset 0 0 10px #000000" : '')};
    -webkit-box-shadow: ${({ current, selectedCategory }) => (current===selectedCategory ? "inset 0 0 10px #000000" : '')};
    box-shadow: ${({ current, selectedCategory }) => (current===selectedCategory ? "inset 0 0 10px #000000" : '')};
`;

const CategoryDescription = styled.div`
    height: 20%;
    p {        
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`


const CategorySection = ({category, selectedCategory, setSelectedCategory}) => {
    const onCategoryClicked = (i) => {
        setSelectedCategory(i);
    } 

    return (       
        <Style>
            <Container>
                <Grid id='category'>
                    {category.map(
                        (item, index) =>(
                            <Link key={index} to='vendorList' smooth={true} onClick={()=>{onCategoryClicked(item.title)}} >
                                <Item current={item.title} selectedCategory={selectedCategory}>
                                    
                                    <CategoryImage src={item.image}></CategoryImage>
                                    <CategoryTitle><h1>{item.title}</h1></CategoryTitle>
                                        
                                    
                                </Item>
                            </Link>  

                        )
                    )}
                </Grid>
            </Container>


        </Style>
    )
}

export default CategorySection
