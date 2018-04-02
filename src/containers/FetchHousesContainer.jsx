import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HouseActions from '../actions/Houses';
import { RaisedButton } from 'material-ui';

class FetchHousesContainer extends Component {
    render() {
      console.log(this.props);
      const { houseActions } = this.props;
      return (
        <div>
            <RaisedButton onClick ={ houseActions.fetchHouses }>Päivitä</RaisedButton>
        </div>
      );
    }
  }

  FetchHousesContainer.propTypes = {
    houseActions: PropTypes.object.isRequired
  };
  
  function mapStateToProps(state) {
    return {  houses: state.houses.houses
  
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
  )(FetchHousesContainer);
    