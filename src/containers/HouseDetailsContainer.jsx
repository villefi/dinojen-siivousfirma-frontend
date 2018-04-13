import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HouseList from '../components/HouseList';
import HouseDetails from '../components/HouseDetails';
import * as HouseActions from '../actions/Houses';
import { push } from 'react-router-redux';
import { ListItem } from 'material-ui';



class HouseDetailsContainer extends Component {

    componentDidMount() {
    this.props.houseActions.detailsHouse(this.props.id);
  }
  
  render() {
    let id = this.props.id;
    // let talo2 = this.props.houses[id-1];
    let talo = this.props.houses;
    // if (this.props.houses[1].id>0) talo = this.props.houses[id-1];
    // else talo = this.props.houses;

    let currentdate = new Date(); 
    let date = currentdate.getDate() + "." + (currentdate.getMonth()+1)  + "." + currentdate.getFullYear();
    let time = currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes();
    console.log('tänään on :' + date + ' ja kello on :' + time);


    console.log(id, talo);
    
    return (
      <div>
        
        <ListItem primaryText= { 'ID:' + id +' - Osoite: ' + talo.name}/>
        <ListItem primaryText= { 'Nimi: ' + talo.description }  />
        <ListItem primaryText= { 'Isännöitsijä: ' + talo.pm} />
        <ListItem primaryText= { 'Siivoaja: ' + talo.worker} />
        <ListItem primaryText= { 'Viimeksi siivottu: ' + talo.date + ' kello ' + talo.time}/>
        {!talo.done && <h3> <ListItem primaryText= { 'Talo on siivoamatta.'} /> </h3> }
        { talo.done===1 &&  <ListItem secondaryText= {'Talo on siivottu.'}/>  }

      </div>   
    );
  }
}
//    <HouseDetails id ={ id } />

// reactin apufunktio, jolla voidaan tehdä propseista pakollisia
HouseDetailsContainer.propTypes = {
 // houses: PropTypes.array.isRequired
  
};

// Haetaan storessa olevasta tilasta sopivat asiat näytettäväksi propseiksi

function mapStateToProps(state) {
  return {
        houses: state.houses.houses
  };
 }

// Haetaan tarvittavien actioneiden funktiot propseiksi
function mapDispatchToProps(dispatch) {
  return {
    houseActions: bindActionCreators(HouseActions, dispatch),
    navigateToHouse: (id) => dispatch(push(`/houses/${id}`))

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseDetailsContainer);
