import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditHouse from '../components/EditHouse';
import * as HouseActions from '../actions/Houses';

class EditHouseContainer extends Component {
  render() {
    const { houseActions } = this.props;
    return (
      <div>
        <EditHouse editHouse ={ houseActions.editHouse }/>
      </div>
    );
  }
}

EditHouseContainer.propTypes = {
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
)(EditHouseContainer);
