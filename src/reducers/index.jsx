import { combineReducers } from 'redux';
import todos from './todos';
import games from './tames';
import houses from './houses';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    games,
    houses,
    routerReducer
});

export default rootReducer;
