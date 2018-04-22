import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'


class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 17,
            
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        


        });
    }

    render() {

      const mapStyle = {
        width: 500,
        height: 300,
        border: '1px solid black'
      };

        console.log('Google_maps', this.refs.map);
          return <div ref="map" style={mapStyle} Marker name={'Current location'} />;
    }
}

export default GoogleMap;

/*

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
        
         bootstrapURLKeys={{ key: process.env.API_KEY }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'Wheres Waldo?' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

// const API_KEY = '49d787f165f444698e921a6a2fb8106e';

export default GoogleMap;

*/