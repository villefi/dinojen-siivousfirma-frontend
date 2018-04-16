import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HouseActions from '../actions/Houses';
import { RaisedButton } from 'material-ui';
import classnames from 'classnames';
import { ListItem } from 'material-ui';
import HouseDetailsContainer from '../containers/HouseDetailsContainer';
import EditHouse from '../components/EditHouse';
import EditHouseContainer from '../containers/EditHouseContainer';
import { SHOW_HOUSE_SUCCESS } from "../constants/ActionTypes";


class HouseContainer extends Component {
  
  render() {
    
    const { actions } = this.props;  
    let id= this.props.match.params.id;
    console.log('Housecontainter id= '+id);

    const style = {    margin: 12 };
    return (
        <div>
         
         <h3> <ListItem primaryText= {'Talo numero ' + id} /></h3>
         <HouseDetailsContainer id={id}/>
         <RaisedButton primary={true} style={style} onClick ={ () => actions.cleanHouse(id) }>Siivoa talo # {id}</RaisedButton>
         <RaisedButton secondary={true} style={style} onClick ={ () => actions.dirtHouse(id) }>Sotke talo #{id}</RaisedButton>
         <h3> <ListItem primaryText= {'Muokkaa taloa'} /> </h3>
         <EditHouseContainer/>        
         </div>
    );
  }
}

HouseContainer.propTypes = {
  // cleanHouse: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {   

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HouseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseContainer);
