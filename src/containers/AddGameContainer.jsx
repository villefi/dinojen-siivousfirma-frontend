import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddGame from '../components/AddGame';
import * as GameActions from '../actions/Games';

class AddGameContainer extends Component {
  render() {
    const { gameActions } = this.props;
    return (
      <div>
        <AddGame addGame ={ gameActions.addGame }/>
      </div>
    );
  }
}

AddGameContainer.propTypes = {
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
)(AddGameContainer);
