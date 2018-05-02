import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import {browserHistory} from 'react-router';
import LogIn from '../components/LogIn';
import * as HouseActions from '../actions/Houses';
import { RaisedButton, HardwareMouse } from 'material-ui';
import { red100, red900, fullWhite, lightWhite, blue300, yellow300 } from "material-ui/styles/colors";

class LogInContainer extends Component {

 // state = { show : false };

 // onClickHandler = () =>  {
 //   console.log('mitä vtua');
   // if (req.user) {
  //    redirect('/');
   // } else {
   //   res.redirect('/login');
  // }
 
    //   browserHistory.push(`/`);
    //   location.replace('/');
    //     <button onClick ={this.onClickHandler.bind(this)} > Siirry pääsivulle </button>       
 // } 

  render() {
    const { houseActions } = this.props;
    const style = { margin: 35 };

    return (  <div>
              <LogIn logIn ={ houseActions.logIn }/>
              
   
          
          </div>
      
          );
  }
}

// <button>           <Link to="/">Siirry pääsivulle</Link> </button>


LogInContainer.propTypes = {
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
)(LogInContainer);
