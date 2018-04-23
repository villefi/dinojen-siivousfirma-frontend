import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui';
import HouseItem from '../components/HouseItem';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const defaultStyle = {
  width: 500,
  marginLeft: 20
};


// Tässä tehdään lista taloista

class GmapHouseList extends Component {
  constructor(props, context) {
    super(props, context);
   
    }

  render() {
   const style = {
        width: '90vw',
        height: '75vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        border : '1px solid black',
        position: 'relative'
      }
    const { houses, navigateToHouse } = this.props;

    const icondone = ['../src/pun25.png','../src/vih25.png'];

    console.log('GmapAll propsit: ', this.props);
    return (

        

        <Map
        item
        xs = { 12 }
        style = { style }
        containerStyle={{ position: 'relative'}}
        mapType = "roadmap"
        google = { this.props.google }
        zoom = { 14 }
        initialCenter = {{ lat: 61.450884, lng: 23.848809 }}
        >

       {houses.map(house =>
        <Marker
            house={house}  
                  key={house.id}
                  house={house}
                  title = { house.name + ' ' + house.worker }
                  position = {{ lat: house.lat, lng: house.lon }}
                  name = { house.id  }
                  icon= {icondone[house.done]}
                  onClick = { () => navigateToHouse(house.id) }
                /> 
            )}


      </Map>
      
    );
  }
}

GmapHouseList.propTypes = {
  houses: PropTypes.array.isRequired,
  navigateToHouse: PropTypes.func
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD63e-TwdH-PJub9gzTblUSnoFhJyyLd7Q'
})(GmapHouseList)


/*  

icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

{house.done===1 && <Marker
                    house={house}  
                          key={house.id}
                          house={house}
                          title = { house.name + ' ' + house.worker }
                          position = {{ lat: house.lat, lng: house.lon }}
                          name = { house.id  }
                          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                          onClick = { () => navigateToHouse(house.id) }
                        /> }
        
           */