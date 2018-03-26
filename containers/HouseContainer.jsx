import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class HouseContainer extends Component {
  render() {
    return (
        <div>
            Kissi
        {this.props.match.params.id}
        {this.props.match.params.name}
        </div>
    );
  }
}

export default HouseContainer;
