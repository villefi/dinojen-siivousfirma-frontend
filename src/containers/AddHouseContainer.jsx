import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddHouse from '../components/AddHouse';
import * as HouseActions from '../actions/Houses';

class AddHouseContainer extends Component {
  render() {
    const { houseActions } = this.props;
    return (
      <div>
        <AddHouse addHouse ={ houseActions.addHouse }/>
      </div>
    );
  }
}

AddHouseContainer.propTypes = {
  houseActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    houseActions: bindActionCreators(HouseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHouseContainer);
