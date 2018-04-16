import React, { PropTypes, Component } from 'react';
import {Form, Field} from 'simple-react-forms';




const defaultStyle = {
  marginLeft: 20
};

class EditHouse extends Component {

    onClickHandler () {
    //  console.log('edit house ja id = ', id);
      console.log(this.refs['simpleForm'].getFormValues());
      this.props.editHouse(this.refs['simpleForm'].getFormValues());
      
    }

    //   'id=' { id }

    render () {
      return (
      <div>
      
        <Form ref='simpleForm'>
        <Field
              name='id'
              label='Anna talon numero'
              type='text'
            />
            <Field
              name='name'
              label='Anna talon osoite'
              type='text'
              placeholder='Kissa'
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
        <button onClick={this.onClickHandler.bind(this)}> Muokkaa talo </button>
      </div>
  
      );
    }
  }



EditHouse.propTypes = {
editHouse: PropTypes.func.isRequired
};

export default EditHouse;