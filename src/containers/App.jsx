import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogInContainer from "../containers/LogInContainer";
import HouseListContainer from '../containers/HouseListContainer';
import AddHouseContainer from "../containers/AddHouseContainer";
// import FetchHousesContainer from '../containers/FetchHousesContainer';
// import CleanHouseContainer from '../containers/CleanHouseContainer';
// import HouseContainer from '../containers/HouseContainer';





class App extends Component {
  
  render() {
    

    let kayttaja = window.localStorage.loggedInUser;
    
  //   if (!kayttaja)  mene ('/login');

    return (
      <div>

            
      {kayttaja &&     <h2> - - - - Dino Siivous Oy - - - -Tervetuloa {kayttaja}  </h2>  }
      {kayttaja && <HouseListContainer/> }
      {kayttaja && <AddHouseContainer/> }

      { !kayttaja &&
       <LogInContainer/>
       }


         
      </div>
    );
  }
}

export default App;

//      <LogInContainer/>
//      <CleanHouseContainer/>
//      <FetchHousesContainer/>