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
        background-color: #fef3e9;
        backdrop-filter: blur(25px);
        margin-bottom: 3%;       
        box-sizing: border-box;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius:10px;
        transition: 0.3s ease-in-out;
        .card-title{
            :hover{
                text-decoration:underline;
                cursor: pointer;
            }
        }
        :hover{
            transform:translateY(-10px) scale(1.1,1.1);
            -moz-box-shadow:   0px 10px 33px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 0px 10px 33px 0px rgba(0,0,0,0.75);
            box-shadow:         0px 10px 33px 0px rgba(0,0,0,0.75);
            z-index:10;
        }
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
export class VendorList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            vendors: []
        };
    }
    
    componentDidMount() {
        fetch('http://backend.stjohnslocalguide.com/v1/vendors')
        .then(res => res.json()).then((data) => {         
          this.state.vendors = data.vendors;
        })
        .catch(console.log);
    }

    render(){
        return (
            <Style >
                <ContainerWrapper ref={this.props.reference}>
                <Divider >{this.props.selectedCategory}</Divider>
                <Container className= "container" >                
                    <Row className="row ">
                        {this.state.vendors.map(
                        (item, index) =>(
                            (this.props.selectedCategory == item.type) &&
                            <Card className="card col-sm-6 col-md-4 col-lg-3 " >
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
    }
    
};


