import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HouseListContainer from '../containers/HouseListContainer';
import FetchHousesContainer from '../containers/FetchHousesContainer';
import CleanHouseContainer from '../containers/CleanHouseContainer';
import HouseContainer from '../containers/HouseContainer';
import AddHouseContainer from "./AddHouseContainer";



class App extends Component {
  render() {
    return (
      <div>
          <div>
            <h2>- - - - Dino Siivous Oy  </h2>
            <HouseListContainer/>
            
            <AddHouseContainer/>
          </div>
      </div>
    );
  }
}

export default App;

// <CleanHouseContainer/>
//             <FetchHousesContainer/>