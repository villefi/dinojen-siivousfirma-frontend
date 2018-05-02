import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HouseList from '../components/HouseList';
import GmapHouseList from '../containers/GmapAllContainer'
import * as HouseActions from '../actions/Houses';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';



class HouseListContainer extends Component {
  constructor(props, context) {    // componentDidMount
    super(props, context);
  
    this.props.houseActions.fetchHouses();
  }
  
  render() {
    const { houses } = this.props;
    
    return (
      <div>
        <Link to="/login">Kirjaudu sisään - ulos</Link>
        <GmapHouseList houses={ houses } navigateToHouse={ this.props.navigateToHouse }/>
       
        <HouseList houses={ houses } navigateToHouse={ this.props.navigateToHouse }/>     
      </div>
    );
  }
}
// <HouseList houses={ houses } navigateToHouse={ this.props.navigateToHouse }/>
// reactin apufunktio, jolla voidaan tehdä propseista pakollisia
HouseListContainer.propTypes = {
  houses: PropTypes.array.isRequired
  
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
)(HouseListContainer);
