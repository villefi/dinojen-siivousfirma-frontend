import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HouseActions from '../actions/Houses';
import { RaisedButton } from 'material-ui';
import classnames from 'classnames';
import { ListItem } from 'material-ui';
import HouseDetailsContainer from '../containers/HouseDetailsContainer';

class HouseContainer extends Component {
  
  render() {
    
    const { actions } = this.props;  
    let id= this.props.match.params.id;
    console.log();

    return (
        <div>
         
         <h3> <ListItem primaryText= {'Talo numero ' + id} /></h3>
         <HouseDetailsContainer id={id}/>
         <RaisedButton onClick ={ () => actions.cleanHouse(id) }>Siivoa talo #{id}</RaisedButton>
                 
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
