import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from '../actions/Games';
import { RaisedButton } from 'material-ui';

class FetchGamesContainer extends Component {
  render() {
    const { gameActions } = this.props;
    return (
      <div>
        <RaisedButton onClick ={ gameActions.fetchGames }>Hae pelit</RaisedButton>
      </div>
    );
  }
}

FetchGamesContainer.propTypes = {
  gameActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchGamesContainer);
