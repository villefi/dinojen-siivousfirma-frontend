import React, { PropTypes, Component } from 'react';
import {Form, Field} from 'simple-react-forms';




const defaultStyle = {
  marginLeft: 20
};

class LogIn extends Component {

    onClickHandler () {
      console.log('LogIn: :', this.refs['simpleForm'].getFormValues());
      this.props.logIn(this.refs['simpleForm'].getFormValues());
      console.log('LogIn  this.props.logIn', this.props);
      location = location;
      
    }
    render () {
      return (
      <div style={{marginLeft:20, marginTop: 50}}>
        <h2> - Tervetuloa DinoClening Oy - Kirjaudu sisään:</h2>
        <Form ref='simpleForm'>
            <Field
              name='username'
              label='Käyttäjätunnus'
              type='text'
            />
            <Field
              name='password'
              label='Salasana'
              type='text'
            />
        </Form>
        <button onClick={this.onClickHandler.bind(this)}> Kirjaudu sisään </button>
      </div>
  
      );

    }
  }



LogIn.propTypes = {
logIn: PropTypes.func.isRequired
};

export default LogIn;