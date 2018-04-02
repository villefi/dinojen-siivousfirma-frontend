import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HouseActions from '../actions/Houses';
import { RaisedButton } from 'material-ui';

class HouseContainer extends Component {
  render() {
    const { houseActions } = this.props;  
    console.log(houseActions);
    return (
        <div>
           HouseContainer.Kissi id  :
           {this.props.match.params.id}
        <RaisedButton onClick ={ HouseActions.cleanHouse }>Siivoa</RaisedButton>


        </div>
/*      {this.props.match.params.name}
    
        this.props.cleanHouse(text);

*/

);
  }
}

HouseContainer.propTypes = {
  // cleanHouse: PropTypes.func.isRequired
};

export default HouseContainer;
