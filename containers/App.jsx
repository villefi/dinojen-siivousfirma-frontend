import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HouseListContainer from '../containers/HouseListContainer';
import FetchHousesContainer from '../containers/FetchHousesContainer';
import CleanHouseContainer from '../containers/CleanHouseContainer';

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <h3> Nakki tööt</h3>
            <FetchHousesContainer/>
            <HouseListContainer />
            <CleanHouseContainer/>
          </div>
      </div>
    );
  }
}

export default App;
