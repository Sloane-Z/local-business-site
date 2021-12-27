import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Card, Container, Row } from 'react-bootstrap';

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
        border-radius: 10px;
        transition: 0.3s ease-in-out;
        background-color:transparent;
        word-wrap: normal;
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
           
        }
        .card-text{
            font-family: 'Poppins', sans-serif;
            font-size: 0.9rem;
        }
        @media (min-width: 320px) and (max-width: 480px) {
            margin: 2rem;
  
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

    .Link{
        color: black;
    }
    .moreLink{
        margin-left: 2%;    
    }
    
`

const ContainerWrapper = styled.div`

`

const Divider = ({ ref, children }) => {
    if(children !== '')
    {
        return (
            <div className="dividerContainer" ref={ref} id='vendorList'>
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


export class VendorList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {            
            selectedCategory:'',
            vendors:[],
            processing: true,
        };

    }
    
    componentDidMount() {
        //fetch('https://backend.stjohnslocalguide.com/vendors')  
        //fetch('http://localhost:5000/vendors') 
        fetch('https://express-backend-lbs.herokuapp.com/vendors')            
        .then(res => res.json()).then((data) => {         
          
          this.setState({ vendors: data});
          //this.setState({ selectedCategory: this.props.selectedCategory});
          this.setState({ processing: false});
        })
        
    }

    render(){
        return (

            !this.state.processing?
            (
            <Style >
                <ContainerWrapper>
                    <Divider ><h3>{this.props.selectedCategory}</h3></Divider>
                    <Container className= "container" >                
                        <Row className="row">

                            {this.state.vendors.map(
                                (item, index) =>(
                                    (this.props.selectedCategory === item.type) &&
                                    <Card key ={index} className="col-sm-6 col-md-4 col-lg-3">
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title><Link className='Link' to={"/"+item.id} target="_blank" rel="noopener noreferrer" onClick={()=>{this.props.setSelectedVendor(item.id)}}>{item.name}</Link></Card.Title>
                                            <Card.Text>
                                                {item.description}...
                                            </Card.Text>
                
                                        </Card.Body>
                                    </Card>                
                                )
                            )}

                        </Row>                                               
                    </Container>
                </ContainerWrapper>
    
                </Style>
            ):<></>
        )
    }
    
};


