import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HouseListContainer from '../containers/HouseListContainer';
import FetchHousesContainer from '../containers/FetchHousesContainer';
import CleanHouseContainer from '../containers/CleanHouseContainer';
import HouseContainer from '../containers/HouseContainer';

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <h3> - </h3>
            <HouseListContainer />
            <CleanHouseContainer/>
            <FetchHousesContainer/>
          </div>
      </div>
    );
  }
}

export default App;
