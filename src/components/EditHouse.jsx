import React, { PropTypes, Component } from 'react';
import {Form, Field} from 'simple-react-forms';
import FetchHousesContainer from '../containers/FetchHousesContainer';
import { MapsTransferWithinAStation } from 'material-ui';
import * as HouseActions from '../actions/Houses';




const defaultStyle = {
  marginLeft: 40
};



class EditHouse extends Component {
  constructor(props, context) {
      super(props, context);
    }
  
 onClickHandler () {
    this.props.editHouse(this.refs['simpleForm'].getFormValues())
    this.props.fetchHouses() // tämä ei toimi!!
  }

 
    render () {

    console.log(this.props.house);
   
      return (
       <div>
        <h3> Muokkaa talon tietoja</h3>
        <Form ref='simpleForm'>
        <Field
              name='id'
              label='Talon numero (ei voi muuttaa)'
              type='text'
              defaultValue= {this.props.house.id}
              disabled = {true}
            />
            <Field
              name='name'
              label='Anna talon osoite'
              type='text'
              defaultValue= {this.props.house.name}
            />
            <Field
              name='description'
              label='AsOy Nimi'
              type='text'
              defaultValue= {this.props.house.description}
            />
            <Field
              name='pm'
              label='Isännöitsijä'
              type='text'
              defaultValue= {this.props.house.pm}
            />
            <Field
              name='worker'
              label='Siivoaja'
              type='text'
              defaultValue= {this.props.house.worker}
            />
        </Form>
        <button onClick={this.onClickHandler.bind(this) }> Muokkaa talo </button>
        <FetchHousesContainer/>
      </div>
  
      );
    }
  }

function mapStateToProps(state) {
    return {
      houses: state.houses.houses
    };
  }

EditHouse.propTypes = {
editHouse: PropTypes.func.isRequired //,
// fetchHouses: PropTypes.object.isRequired
};

export default EditHouse;