import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { compose, withProps } from 'recompose'

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {            

        };

    }

  componentDidMount() {
      let geocoder = new window.google.maps.Geocoder();
      geocoder.geocode( { 'address': this.props.address}, function(results, status) {
          if (status === 'OK') {
            this.setState({ 
              lat: results[0].geometry.location.lat(), 
              lng: results[0].geometry.location.lng()
            })
          } else {
              console.log('Geocode was not successful for the following reason:', status);
          }
      })
    }
    render() {
      const { lat, lng } = this.state
      return lat && lng ? <GoogleMap
          defaultZoom={7}
          defaultCenter={{ lat, lng }}
      >
      </GoogleMap> : <div>Loading...</div>
    }
}

export default compose(
  withProps({
      googleMapURL: ('https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='),
      loadingElement: (<div style={{ height: '100%' }} />),
      containerElement: (<div style={{ height: '400px' }} />),
      mapElement: (<div style={{ height: '100%' }} />)
  }),
  withScriptjs,
  withGoogleMap)(MapComponent)