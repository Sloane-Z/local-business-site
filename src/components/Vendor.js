import React from 'react';
import styled from 'styled-components';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// Components
import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';

//Icons
import { Email } from '@styled-icons/material/Email';
import { MapMarker} from '@styled-icons/open-iconic/MapMarker';
import { Telephone } from '@styled-icons/foundation/Telephone';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/bootstrap/Twitter';
import { Link as LinkStyledIcon } from '@styled-icons/boxicons-regular/Link';

const Wrapper = styled.div`

  font-family: 'Poppins', sans-serif;
  background: rgb(224,192,192);
  background: linear-gradient(0deg, rgba(224,192,192,1) 45%, rgba(254,243,233,1) 100%);
`
const LandingImage = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    background: url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    background-repeat:none;
`
const TitleWrapper = styled.div`
    position: relative;
    border: 20px hidden;
    padding-left: 5%;   
    transform: translateY(-50%);
    background-color: black;
`

const TitleDiv = styled.div`
    transform: translateY(-50%);
    width: 50%;
    margin: 0 auto;
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

  margin-right: 1.5rem;
  .fa{
    flex: 0 1 20px;
    font-size: 1.8rem;
    margin-right: 2rem;
  }
  span{
    font-size: 1.1rem;
    font-weight: 300;
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

const DescriptionWrapper = styled.div`
  padding: 0 2%;
  width: 50%;
`
const DescriptionTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size:1.5rem;
  font-style: bold;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
`
const Description = styled.div`
  font-family: 'Poppins', sans-serif;
`

// Google Map 
const MapWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  width: 50%;
`
const MyMapComponent = compose(
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
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

const PageWrapper = styled.div`
  display: flex;
`

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
      .then(this.setState({ processing: false}))
      .catch(console.log);   
  }
    render(){

        return(
          !this.state.processing?
          (
            <>
                <NavigationBar/>
                <Wrapper>
                    <LandingImage></LandingImage>                   
                    <TitleDiv>{this.state.vendor.name}</TitleDiv>
                    <LinkContent>
                      <IconText> <PhoneIcon size='25'aria-hidden ='true'/><span>{(this.state.vendor.phoneNumber===undefined)?'':this.state.vendor.phoneNumber}</span></IconText>
                      <IconText> <EmailIcon size='25' aria-hidden ='true'/><span>{(this.state.vendor.email===undefined)?'':this.state.vendor.email}</span></IconText>
                      <IconText> <MapMarkerIcon size='25' aria-hidden ='true'/><span>{(this.state.vendor.address===undefined)?'':this.state.vendor.address}</span></IconText>
                      <IconText> <LinkIcon size='25' aria-hidden ='true'/><span>{(this.state.vendor.website===undefined)?'':this.state.vendor.website}</span></IconText>
                    </LinkContent>
                   <PageWrapper>
                    <DescriptionWrapper>
                        <DescriptionTitle>Details</DescriptionTitle>
                        <Description>When you’re craving delicious pizza cooked fresh and brought right to your door, call Greco Pizza in St John’s. We have a many different types of pizza including gluten free and vegetarian options, and our menu also features donairs, egg rolls, subs, garlic fingers, wings, salad and drinks.</Description>
                      </DescriptionWrapper>
                      <MapWrapper>
                        <MyMapComponent
                          isMarkerShown={true}
                          onMarkerClick={false}
                        />
                      </MapWrapper>
                   </PageWrapper>


                <Footer/>
                </Wrapper>
            </>
          ):<></>
        )

    }
};
