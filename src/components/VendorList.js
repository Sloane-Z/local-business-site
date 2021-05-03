import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import {Card, CardGroup, CardDeck, Button, Container, Row, Col} from 'react-bootstrap';
import { vendorList } from '../data/foodVendorList';
const Style = styled.div`
    background: rgb(224,192,192);
    background: linear-gradient(0deg, rgba(224,192,192,1) 45%, rgba(254,243,233,1) 100%);
    
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .card{
        backdrop-filter: blur(25px);
        margin-bottom: 3%;       
        box-sizing: border-box;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius:10px;
        transition: 0.3s ease-in-out;
        -webkit-transition : all 0.3s ease-out;
        background-color:transparent;
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
        transition: 0.3s ease-in-out;

    }
    h3{
        text-align: center;
        font-size: 2rem;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
        padding-bottom: 2%;
    }
    .dividerContent {
        padding: 0 10px 0 10px;
        font-size: 2rem;
    }
    
`

const ContainerWrapper = styled.div`

`

const Divider = ({ ref, children }) => {
    if(children !== '')
    {
        return (
            <div className="dividerContainer" ref={ref}>
              <div className="divider" />
              <span className="dividerContent">
                {children}
              </span>
              <div className="divider" />
            </div>
          );
    }
    else{
        return <div></div>
    }

  };

const LinkText = styled.text`
`
export class VendorList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            vendors: []
        };
    }
    
    componentDidMount() {
        fetch('http://backend.stjohnslocalguide.com/v1/vendors')
        .then(res => res.json()).then((data) => {         
          this.state.vendors = data.vendors;
          this.state.isFetching = false;
        })
        .catch(console.log);
    }

    render(){
        return (

            (!this.state.isFetching) &&
                <Style >
                <ContainerWrapper ref={this.props.reference}>
                    <Divider ><h3>{this.props.selectedCategory}</h3></Divider>
                    <Container className= "container" >                
                        <Row className="row ">

                            {this.state.vendors.map(
                                (item, index) =>(
                                    (this.props.selectedCategory === item.type) &&
                                    <Card className="card col-sm-6 col-md-4 col-lg-3 " >
                                    <Card.Img variant="top" src={item.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
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


