import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HouseList from '../components/HouseList';
import * as HouseActions from '../actions/Houses';
import { push } from 'react-router-redux';

// const { houses } = {null};

class HouseListContainer extends Component {

    componentDidMount() {
    this.props.houseActions.fetchHouses();
  }
  
  render() {
    const { houses } = this.props;
    
    return (
      <div>
        <h3>Osoite    -    Siivottu? </h3>
        <HouseList houses={ houses } navigateToHouse={ this.props.navigateToHouse }/>
      </div>
    );
  }
}

// reactin apufunktio, jolla voidaan tehdä propseista pakollisia
HouseListContainer.propTypes = {
  houses: PropTypes.array.isRequired
  
};

// Haetaan storessa olevasta tilasta sopivat asiat näytettäväksi propseiksi
// kopioi gamelistcontainerista
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
