import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GameContainer extends Component {
  render() {
    return (
      console.log(this.props.match),
      <div>
        kissa :
        {this.props.match.params.id}

      </div>
    );
  }
}

export default GameContainer;
