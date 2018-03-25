import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

const defaultStyle = {
  marginLeft: 20
};

class AddGame extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addGame(text);
    }
  }

  render() {
    return (
      <div>
          <h1 style={defaultStyle} >Add Game</h1>
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="Name" />
                     </div>
    );
  }
}

AddGame.propTypes = {
  addGame: PropTypes.func.isRequired
};

export default AddGame;
