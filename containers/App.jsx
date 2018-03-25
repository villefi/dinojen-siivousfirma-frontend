import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HouseListContainer from '../containers/HouseListContainer';

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <HouseListContainer />
          </div>
      </div>
    );
  }
}

export default App;
