import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class HouseListContainer extends Component {

  componentDidMount() {
    // tänne esim. talojen hakeminen ensimmäisellä kerralla kun sivu ladataan
  }

  render() {
    return (
      <div>
        <h3> jee </h3>
      </div>
    );
  }
}

// reactin apufunktio, jolla voidaan tehdä propseista pakollisia
HouseListContainer.propTypes = {
  
};

// Haetaan storessa olevasta tilasta sopivat asiat näytettäväksi propseiksi
// kopioi gamelistcontainerista
function mapStateToProps(state) {
  return {

  };
}

// Haetaan tarvittavien actioneiden funktiot propseiksi
function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseListContainer);
