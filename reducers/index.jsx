import { combineReducers } from 'redux';
import todos from './todos';
import games from './games';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    games,
    routerReducer
});

export default rootReducer;
