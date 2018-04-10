import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ListItem } from 'material-ui';
import * as HouseActions from '../actions/Houses';


class HouseDetails extends Component {
 //   componentDidMount() {
       
    
  //  constructor(props, context) {
   //   super(props, context);

   //   }
      
  

  render() {
   // const { house } = this.props;
   let id = this.props;
       console.log(HouseActions.detailsHouse(id));
    
          
    // <HouseList houses= { () => HouseActions.detailsHouse(id)}

    return (
    <div>
    <h1> Kissa koira HouseDetails </h1>
    <h3>  /></h3>
    </div>
    )
 };
}

HouseDetails.propTypes = {
 // house: PropTypes.object.isRequired
  
};

export default HouseDetails;
