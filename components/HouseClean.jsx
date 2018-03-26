import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

const defaultStyle = {
    marginLeft: 20
  };

class CleanHouse extends Component {
    handleSave(text) {
        if (text.length !== 0) {
          this.props.cleanHouse(text);
        }
      } 

  render() {
    return (
      <div>
          <h1 style={defaultStyle} >Siivoa talo</h1>
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="Name" />
                     </div>
    );
  }
}

CleanHouse.propTypes = {
  cleanHouse: PropTypes.func.isRequired
};

export default CleanHouse;