import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import {Card, CardGroup, CardDeck, Button, Container, Row, Col} from 'react-bootstrap';

const Style = styled.div`
    background-color: #fef3e9;

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card{
        //margin-bottom: 3%;       
        box-sizing: border-box;
        border: 4px solid transparent;
        background-clip: padding-box;
    }

    .dividerContainer{
        display: flex;
        align-items: center;
        padding: 4%;
    }
    .divider{
        border-bottom: 1px solid black;
        width: 100%;
    }
    .dividerContent {
        padding: 0 10px 0 10px;
        font-size: 2rem;
    }
    
`

const ContainerWrapper = styled.div`

`

const Divider = ({ ref, children }) => {
    return (
      <div className="dividerContainer" ref={ref}>
        <div className="divider" />
        <span className="dividerContent">
          {children}
        </span>
        <div className="divider" />
      </div>
    );
  };

const LinkText = styled.text`
`

const VendorList = ({reference, data, selectedCategory}) => {
    return (
        <Style >
            <ContainerWrapper ref={reference}>
            <Divider >{selectedCategory}</Divider>
            <Container className= "container" >                
                <Row className="row">
                    {data.map(
                    (item, index) =>(
                        (selectedCategory == item.type) &&
                        <Card className="card col-sm-6 col-md-4 col-lg-3" >
                        <Card.Img variant="top" src={item.thumbnail} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description} <LinkText><Link to = "/">More...</Link></LinkText>
                            </Card.Text>

                        </Card.Body>
                        </Card>                
                    )
                    )                       
                }
                </Row>                                               
            </Container>
            </ContainerWrapper>

            </Style>
    )
};

export default VendorList
