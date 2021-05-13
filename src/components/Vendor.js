import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { NavigationBar } from './NavigationBar';
import  ScrollToTop  from'./ScrollToTop';
import { Contact } from './Contact';
import { Footer } from './Footer';

//Icons
import { Email } from '@styled-icons/material/Email';
import { MapMarker} from '@styled-icons/open-iconic/MapMarker';
import { Telephone } from '@styled-icons/foundation/Telephone';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/bootstrap/Twitter';

const Wrapper = styled.div`

`
const LandingImage = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    background: url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
`
const TitleWrapper = styled.div`
    position: relative;
    border: 20px hidden;
    padding-left: 5%;   
    transform: translateY(-50%);
    background-color: black;
`

const TitleDiv = styled.div`
    transform: translateY(-50%) translatex(70%);
    width: 30%;
    padding: 2px 10px ;
    backdrop-filter: blur(25px);
    font-style: italic;
    font-size: 1.7rem;
    border-style: solid;
    
    border-width: 5px;
    font-family:'Poppins',sans-serif;   
    text-align: center;
`

const IconText = styled.div`
  display: inline-flex;
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
  margin-left: 1.5rem;
`
const PhoneIcon = styled(Telephone)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 1rem;
`

const EmailIcon = styled(Email)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 1rem;
`
const MapMarkerIcon = styled(MapMarker)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 1rem;
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
const ContentWrapper = styled.div`

`
export class Vendor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <>
                <NavigationBar/>
                <Wrapper>
                    <LandingImage></LandingImage>                   
                    <TitleDiv>Cabbage Lady Reds</TitleDiv>
                    

 
                    <ContentWrapper>
                    <IconText> <PhoneIcon size='25'aria-hidden ='true'/><span>709-765-6486</span></IconText>
                    <IconText> <EmailIcon size='25' aria-hidden ='true'/><span>admin@mocca.com</span></IconText>
                    <IconText> <MapMarkerIcon size='25' aria-hidden ='true'/><span>435 Grand Ave, Ridgewood, NY 123</span></IconText>
                    </ContentWrapper>
                </Wrapper>
                <Footer/>
            </>
        )

    }
}
