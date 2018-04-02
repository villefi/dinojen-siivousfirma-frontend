import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameList from '../components/GameList';
import * as GameActions from '../actions/Games';
import { push } from 'react-router-redux';

class GameListContainer extends Component {

  componentDidMount() {
    this.props.gameActions.fetchGames();
  }

  render() {
    const { games } = this.props;
    return (
      <div>
        <GameList games={ games } navigateToGame={ this.props.navigateToGame }/>
      </div>
    );
  }
}

GameListContainer.propTypes = {
  games: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.games.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(GameActions, dispatch),
    navigateToGame: (id) => dispatch(push(`/game/${id}`))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameListContainer);
