import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui';
import GameItem from '../components/GameItem';

const defaultStyle = {
  width: 300,
  marginLeft: 20
};

class GameList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { games, navigateToGame } = this.props;
    return (
      <div className="game-list" style={defaultStyle}>
        <List className="game-list">
          {games.map(game =>
            <GameItem key={game.id} game={game} onClick={navigateToGame}/>
          )}
        </List>
      </div>
    );
  }
}

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  navigateToGame: PropTypes.func
};

export default GameList;
