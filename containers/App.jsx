import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameListContainer from '../containers/GameListContainer';
import AddGameContainer from '../containers/AddGameContainer';
import FetchGamesContainer from '../containers/FetchGamesContainer';

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <FetchGamesContainer/>
            <AddGameContainer/>
            <GameListContainer/>
          </div>
      </div>
    );
  }
}

export default App;
