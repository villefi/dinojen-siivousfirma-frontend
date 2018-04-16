import React, { PropTypes, Component } from 'react';
import {Form, Field} from 'simple-react-forms';


const defaultStyle = {
  marginLeft: 20
};

class AddHouse extends Component {

    onClickHandler () {
      console.log(this.refs['simpleForm'].getFormValues());
      this.props.addHouse(this.refs['simpleForm'].getFormValues());
    }
    render () {
      return (
      <div>
        <Form ref='simpleForm'>
            <Field
              name='name'
              label='Anna talon osoite'
              type='text'
            />
            <Field
              name='description'
              label='AsOy Nimi'
              type='text'
            />
            <Field
              name='pm'
              label='Isännöitsijä'
              type='text'
            />
            <Field
              name='worker'
              label='Siivoaja'
              type='text'
            />
        </Form>
        <button onClick={this.onClickHandler.bind(this)}> Lisää talo </button>
      </div>
  
      );
    }
  }



AddHouse.propTypes = {
addHouse: PropTypes.func.isRequired
};

export default AddHouse;