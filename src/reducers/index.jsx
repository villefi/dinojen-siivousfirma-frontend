import { combineReducers } from 'redux';
import todos from './todos';
import games from './games';
import houses from './houses';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    games,
    houses,
    routerReducer
});

export default rootReducer;
