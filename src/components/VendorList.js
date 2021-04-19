
import React from 'react';
import styled from 'styled-components';
import {Card, CardGroup, CardDeck, Button, Container} from 'react-bootstrap';

export const Style = styled.div`
    background-color: #fef3e9;
    padding: 10%;
`



const VendorList = ({data, selectedCategory}) => {


    return (
        selectedCategory != '' && 
        <Style>

            <Container className = "container-fluid mt-4">
            { data.map(
                (item, index) =>(
                    selectedCategory == item.type &&
                    <Card style={{  }}>
                    <Card.Img variant="top" src={item.thumbnail} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Button variant="primary">Take A Look</Button>
                    </Card.Body>
                    </Card>
                )
            )}
            </Container>

        </Style>

    )
};

export default VendorList
