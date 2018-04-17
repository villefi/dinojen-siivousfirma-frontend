import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditHouse from '../components/EditHouse';
import * as HouseActions from '../actions/Houses';

class EditHouseContainer extends Component {
  render() {
    const { houseActions } = this.props;
   
    let id = this.props.house.id;
    let talo = this.props.house;
    console.log('EHC talo: ' + talo);
    return (
      <div>
        <EditHouse editHouse ={ houseActions.editHouse } fetchHouses ={houseActions.fetchHouses} house ={talo}/>
      </div>
    );
  }  // <EditHouse editHouse ={ talo }/>
}

EditHouseContainer.propTypes = {
  houseActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    houses: state.houses.houses
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
