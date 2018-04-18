import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HouseActions from '../actions/Houses';
import { RaisedButton, HardwareMouse } from 'material-ui';
import classnames from 'classnames';
import { ListItem } from 'material-ui';
import HouseDetailsContainer from '../containers/HouseDetailsContainer';
import EditHouse from '../components/EditHouse';
import EditHouseContainer from '../containers/EditHouseContainer';
import { SHOW_HOUSE_SUCCESS } from "../constants/ActionTypes";
import { red100, red900, fullWhite, lightWhite, pinkA100, yellow300 } from "material-ui/styles/colors";


class HouseContainer extends Component {
  
  state = { show : false };

  render() {
    
    const { show } = this.state;
    const { actions } = this.props;  
    let id= this.props.match.params.id;
    let house= this.props.houses[id-1];
    console.log('Housecontainter id= ', id, + ' house= ', house);

    const style = { margin: 12 };
    return (
        <div>
         
         <h3> <ListItem primaryText= {'Talo numero ' + id} /></h3>
         <HouseDetailsContainer id={id}/>
         <RaisedButton primary={true} style={style} onClick ={ () => actions.cleanHouse(id) }> Siivoa talo </RaisedButton>
         <RaisedButton secondary={true} style={style} onClick ={ () => actions.dirtHouse(id) }> Sotke talo </RaisedButton>
         <RaisedButton backgroundColor={yellow300} style={style} onClick ={() => this.setState({ show: !show }) }> Avaa muokkaus </RaisedButton>
             { show 
                    ? <div><EditHouseContainer house={house}/></div>
                    : null
                }
         </div>
    );
  }
}

HouseContainer.propTypes = {
  // cleanHouse: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {   
    houses: state.houses.houses
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
