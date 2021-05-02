
import React from 'react';
import emailjs from 'emailjs-com';
import styled, { css } from 'styled-components';
import {Row, Col, Container} from 'react-bootstrap';

import {AwesomeButton,AwesomeButtonProgress,AwesomeButtonSocial,} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
//Icons
import { Email } from '@styled-icons/material/Email';
import { MapMarker} from '@styled-icons/open-iconic/MapMarker';
import { Telephone } from '@styled-icons/foundation/Telephone';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/bootstrap/Twitter';


const Wrapper = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    background: rgb(219,176,160);
    background: linear-gradient(0deg, rgba(219,176,160,1) 45%, rgba(224,192,192,1) 100%);
    background-size: cover;
    
    h1{
      text-align: center;
      font-size: 2.5rem;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
      padding-bottom: 2%;
    };
    p, sub-title{
      color: white;
      text-align: center;
      font-size: 1.5rem;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
    };
    .container{
      width: 100%;
      padding: 40px;
    };

    .dividerContainer{
        display: flex;
        align-items: center;
        padding: 4%;
        width: 100%;
    }
    .divider{
        border-bottom: 1px solid black;
        width: 100%;
        transition: 0.3s ease-in-out;
    }
    .dividerContent {
        padding: 0 10px 0 10px;
        font-size: 2rem;
        width:100%;
        
    }
    .AwesomeButtonProgress {
      --button-default-height: 47px !important;
      --button-default-font-size: 14px;
      --button-default-border-radius: 6px;
      --button-horizontal-padding: 20px;
      --button-raise-level: 5px;
      --button-hover-pressure: 2;
      --transform-speed: 0.185s;
      --button-primary-color: #475472;
      --button-primary-color-dark: #2a3143;
      --button-primary-color-light: #d4d9e4;
      --button-primary-color-hover: #424e6a;
      --button-primary-border: none;
      --button-secondary-color: #fffc6c !important;
      --button-secondary-color-dark: #b9b500 !important;
      --button-secondary-color-light: #6c6a00 !important;
      --button-secondary-color-hover: #fffb3e;
      --button-secondary-border: none;
      --button-anchor-color: #f3c8ad;
      --button-anchor-color-dark: #734922;
      --button-anchor-color-light: #4c3016;
      --button-anchor-color-hover: #f1bfa0;
      --button-anchor-border: 1px solid #8c633c;
}
`

const ContactContainer = styled.div`
  width: 70%;
  border-radius: 15px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255,255,255,.2);
  -moz-box-shadow:   0px 10px 33px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 10px 33px 0px rgba(0,0,0,0.75);
  box-shadow:         0px 10px 33px 0px rgba(0,0,0,0.75);

`

const ContactInfo = styled.div`
  background-color: #b2481b;
  border-radius: 15px;
  flex: 0 1 40%;
  padding: 40px;
  color: white;
  display: flex;
  flex-direction: column;
  h4{
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    text-align: left;

  }
  p{
    color: rgba(255,255,255,.7);
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2rem;
    text-align: left;
    
  }
  @media screen and (max-width: 768px){
    display: none;
  }

`

const IconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .fa{
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 2rem;
  }
  span{
    font-size: 1.3rem;
    font-weight: 300;
  }
  margin-bottom: 1rem;
`

const PhoneIcon = styled(Telephone)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 2rem;
`

const EmailIcon = styled(Email)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 2rem;
`
const MapMarkerIcon = styled(MapMarker)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 2rem;
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

const SocialMedia = styled.div`
  display: flex;
  width: 50%;
  margin-left:0;
  margin-right:auto;

`

const IconCircle = styled.a`
  flex: 0 1 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 50%;
  transition: .3s all ease-in-out;
  color: white;
  &:hover{
    background: #05f7ff;
  }
  
  .fa{
    font-size: 35px;
  }

`

const Form = styled.form`
  width: 100%;
  padding: 40px;
  .col{
    display: flex;
    width: 50%;
    flex: 0 0 100%;
  }
`

const FormStyle = css`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: 0 0 100%;
  padding-right: 40px;
  transition: all .3s ease;
  &::nth-last-child(){
    padding-right: 0;
  }
  label{
    font-size: .9rem;
    color: 2px solid rgba(255,255,255,.6);
    margin-bottom: 1rem;
  }
  input[type='text'], input[type='tel'], input[type='email'], textarea{
    background:rgba(255,255,255,.2);
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 1.5rem;
    font-weight:300;
    color: white;
    background: transparent;
    border-bottom: 2px solid rgba(255,255,255,.4);
    transition: all .3s ease-in-out;
    margin-bottom: 2rem;
    &:focus{
      border:none;
      outline: none;
      border-bottom: 1px solid #05f7ff;
    }
  }
`

const FormGroup = styled.div`
  ${FormStyle};
`

const FormGroupSolo = styled.div`
  ${FormStyle};
  width: 100% !important;
  padding: 0;
`
const FormGroupSoloRight = styled.div`
  ${FormStyle};
  width: 100% !important;
  padding: 0;
  align-items: flex-end;

`
const Button = styled.button`
  width: 200px;
  height: 60px;
  cursor: pointer;
  background: white;
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
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

function findValue(JSON_obj, targetKey){
  for (var x in JSON_obj){
    if (JSON_obj[x].key === targetKey){
      return JSON_obj[x].value;
    }
  }

}



export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      emailAPIKey: []
  };
  }


  
  handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm(findValue(this.state.emailAPIKey.emailAPIKey,"SERVICE_ID"), findValue(this.state.emailAPIKey.emailAPIKey,"TEMPLATE_ID"), e.target, findValue(this.state.emailAPIKey.emailAPIKey,"USER_ID"))
        .then((result) => {
            alert("Message Sent!");
        }, (error) => {
            console.log(error.text);
        });

};


  componentDidMount() {
    fetch('http://backend.stjohnslocalguide.com/v1/emailAPIKey')
    .then(res => res.json()).then((data) => {
      this.state.emailAPIKey = data;
    })
    .catch(console.log);    
  }

  componentWillUnmount() {
    
  }


  render() {
    return(
      <Wrapper>
      <Divider><h1 id='contact'> Contact Us</h1></Divider>
      <p className = 'sub-title'></p>
      <ContactContainer>
  
        <ContactInfo>
          <Row>
            <Col className ='col-sm-0 col-md-12 col-lg-12'>
            <h4>Contact Information</h4>
            <p>Fill up the form and our Team will get back to you within 24 hours.</p>
  
            <IconText> <PhoneIcon size='25'aria-hidden ='true'/><span>709-765-6486</span></IconText>
            <IconText> <EmailIcon size='25' aria-hidden ='true'/><span>admin@mocca.com</span></IconText>
            <IconText> <MapMarkerIcon size='25' aria-hidden ='true'/><span>435 Grand Ave, Ridgewood, NY 123</span></IconText>
  
            <SocialMedia>
              <IconCircle href='#' > <FacebookIcon size = '25' aria-hidden ='true'/> </IconCircle>
              <IconCircle href='#' > <InsIcon size = '25' aria-hidden ='true'/></IconCircle>
              <IconCircle href='#' > <TwitterIcon size = '25' aria-hidden ='true'/></IconCircle>          
            </SocialMedia>
            </Col>
          </Row>
  
        </ContactInfo>
        <Container>
        <form onSubmit={this.handleSubmit}>
        <Row>
              <Col className ='col-sm-12 col-md-6 col-lg-6'>
                <FormGroup>
                  <label>First Name</label>
                  <input type="text" name='firstName'/>
                </FormGroup>
              </Col>
              <Col  className ='col-sm-12 col-md-6 col-lg-6'>
                <FormGroup>
                  <label>Last Name</label>
                  <input type="text" name='lastName'/>
                </FormGroup>
              </Col>
            </Row>
  
            <Row>
              <Col className ='col-sm-12 col-md-6 col-lg-6'>
                <FormGroup>
                  <label>E-Mail</label>
                  <input type="email" name='email'/>
                </FormGroup>
              </Col>
              <Col className ='col-sm-12 col-md-6 col-lg-6'>
                <FormGroup>
                  <label>Phone #</label>
                  <input type="tel" name='phone'/>
                </FormGroup>   
              </Col>
            </Row> 
  
            <Row>
              <Col className ='col-sm-12 col-md-6 col-lg-6'>
                <FormGroupSolo>
                  <label>Message</label>
                  <textarea name='message'></textarea>
                </FormGroupSolo>
              </Col>
            </Row>
  
            <Row>
              <FormGroupSoloRight >
                  <AwesomeButtonProgress size="large" type="primary submit"  value='send'>Send Message</AwesomeButtonProgress>
                </FormGroupSoloRight>
            </Row>   
        </form>
  
        </Container>
  
      </ContactContainer>
      
    </Wrapper>
    )

};

}
