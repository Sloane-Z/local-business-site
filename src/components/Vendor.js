import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Row, Col, Carousel } from 'react-bootstrap';


// Components
import { VendorNavigationBar } from './VendorNavigationBar';
import { Footer } from './Footer';
import  MapComponent  from './Map';
//Icons
import { Email } from '@styled-icons/material/Email';
import { MapMarker} from '@styled-icons/open-iconic/MapMarker';
import { Telephone } from '@styled-icons/foundation/Telephone';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/bootstrap/Twitter';
import { Link as LinkStyledIcon } from '@styled-icons/boxicons-regular/Link';


const Style = styled.div`
  font-family: 'Poppins', sans-serif;
  background: #f4f1ea;
  display: block;
  padding-left:20%;
  padding-right:20%;
  padding-top:10%;
  .carousel{
    margin-top:10%;
    margin-bottom:10%;
    max-width: 400px;
  }

`

const InformationWrapper = styled.div`
  margin-top:10%;  
  font-family: 'Poppins', sans-serif;
`

const TitleWrapper = styled.div`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(1.1rem, -0.875rem + 3.222vw, 1.4rem);
  font-style: bold;
  text-transform: uppercase;
`

const Description = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: clamp(0.9rem, -0.875rem + 3.222vw, 1.1rem);
  margin-top: 3%;
`
const IconWrapper = styled.div`
  margin-top:3%;
`
const IconText = styled.div`

  margin-right: 1.5rem;
  .fa{
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 2rem;
  }
  span{
    font-size: clamp(0.7rem, -0.875rem + 3.222vw, 0.9rem);
    font-weight: 1200;
  }

`


const PhoneIcon = styled(Telephone)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 0.3rem;
`

const EmailIcon = styled(Email)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 0.3rem;
`
const MapMarkerIcon = styled(MapMarker)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 0.3rem;
`

const LinkIcon = styled(LinkStyledIcon)`
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 0.3rem;
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
const LinkContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

// Google Map 
const MapWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  width: 100%;
`

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={20}
    defaultCenter={{ lat: 47.519040, lng: -52.789530  }}
  >
    {<Marker position={{ lat: 12.3, lng: 50.3 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

function findSKUBasedOnID(JSON_obj, targetValue){
  for (var x in JSON_obj){
    if (JSON_obj[x].id === targetValue){
      return JSON_obj[x];
    }
  }
}


export class Vendor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          vendor:[],        
          processing:true,
        };
    }

    componentDidMount() {
      //fetch('http://localhost:5000/vendors')
      //fetch('https://backend.stjohnslocalguide.com/vendors')            
      fetch('https://backend.stjohnslocalguide.com/vendors')     
      .then(res => res.json())
      .then((data) => {               
        this.setState({ vendor: findSKUBasedOnID(data, ((this.props.selectedVendor===''||undefined)?window.location.pathname.substring(1):this.props.selectedVendor)) });
      })
      .then(this.setState({address: this.state.vendor.address}))
      .then(this.setState({ processing: false}))
      .catch(console.log); 

      
  }
    render(){

        return(
          !this.state.processing?
          (
            <>  
                <VendorNavigationBar/>         
                <Style>
                
                    <Row className='no-gutters'>

                      <Col xs={12} sm={12} md ={6} lg={6}>
                        <Carousel fade>
                          <Carousel.Item>
                            <img className="d-block w-100" src={this.state.vendor.image} alt='vendorImage' />
                          </Carousel.Item>
                        </Carousel>
                      </Col>

                      <Col xs={12} sm={12} md ={6} lg={6}>
                        <InformationWrapper>
                          <TitleWrapper>{this.state.vendor.name}</TitleWrapper>
                          <Description>{this.state.vendor.description}</Description>
                           <IconWrapper>
                             <IconText><PhoneIcon size='25'aria-hidden ='true'/><span>{(this.state.vendor.phoneNumber==='')?"N/A":(this.state.vendor.phoneNumber)} </span></IconText>
                             <IconText><EmailIcon size='25'aria-hidden ='true'/><span>{(this.state.vendor.email==='')?"N/A":(this.state.vendor.email)} </span></IconText>
                             <IconText><MapMarkerIcon size='25'aria-hidden ='true'/><span>{(this.state.vendor.address==='')?"N/A":(this.state.vendor.address)} </span></IconText>
                             <IconText><LinkIcon size='25'aria-hidden ='true'/><span>{(this.state.vendor.website==='')?"N/A":(<Link to={{ pathname: (this.state.vendor.website)}} target="_blank">{this.state.vendor.website}</Link>)} </span></IconText>
                           </IconWrapper>
                        </InformationWrapper>
                      </Col>
                    </Row>
                    <Row>
                    </Row>
                    
                </Style>
                <Footer></Footer>
            </>
          ):<></>
        )

    }
};
