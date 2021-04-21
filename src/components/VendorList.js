import React from 'react';
import styled from 'styled-components';
import {Card, CardGroup, CardDeck, Button, Container, Row, Col} from 'react-bootstrap';

const Style = styled.div`
    background-color: #fef3e9;
    padding: 1%;
    .container{
        display: flex;
        justify-content: space-between;
    }
    .card{
        margin-bottom: 3%;       
    }
`

const VendorList = ({reference, data, selectedCategory}) => {
    return (
        selectedCategory != '' && 
        <Style >
            <Container className= "container" ref = {reference}>
                <Row className="row">
                    {data.map(
                    (item, index) =>(
                        (selectedCategory == item.type) &&
                        <Card className=" card col-xs-6 col-md-4 col-lg-3" >
                        <Card.Img variant="top" src={item.thumbnail} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                        </Card>                
                    )
                    )                       
                }
                </Row>                                    
            </Container>
            </Style>
    )
};

export default VendorList
