import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HouseListContainer from '../containers/HouseListContainer';
import FetchHousesContainer from '../containers/FetchHousesContainer';

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <h3> Tööt tööt</h3>
            <FetchHousesContainer/>
            <HouseListContainer />
          </div>
      </div>
    );
  }
}

export default App;
