import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';


class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: true,
        activeMarker: null
      });
    }
  }
  render() {
    
    const style = {
      //width: 500,
      //height: 300,
      width: '50vw',
      height: '30vh',
  //    marginLeft: 'auto',
  //    marginRight: 'auto',
      position: 'relative',
      border : '1px solid black'
      
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        mapType = "satellite"
        containerStyle={{ position: 'relative'}}
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 18 }
        initialCenter = {{ lat: this.props.lat, lng: this.props.lon }}
        
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { this.props.address }
        //  animation = { google.maps.Animation.DROP}
          position = {{ lat: this.props.lat, lng: this.props.lon }}
          name = { this.props.address  }
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        />
         
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }>
            <div>
              <h1>{this.props.address }</h1>
            </div>
        </InfoWindow>
        
        
      </Map>
    );
  }
}  //  visible={true} marker={this.state.activeMarker}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD63e-TwdH-PJub9gzTblUSnoFhJyyLd7Q'
})(GoogleMaps)