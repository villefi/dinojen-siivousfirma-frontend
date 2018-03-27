import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CleanHouse from '../components/CleanHouse';
import * as HouseActions from '../actions/Houses';

class CleanHouseContainer extends Component {
    render() {
      const { HouseActions } = this.props;
      return (
        <div>
          <CleanHouse cleanHouse ={ HouseActions.cleanHouse }/>
        </div>
      );
    }
  }
  
  CleanHouseContainer.propTypes = {
    HouseActions: PropTypes.object.isRequired
  };
  
  function mapStateToProps(state) {
    return {
  
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      HouseActions: bindActionCreators(HouseActions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CleanHouseContainer);
  