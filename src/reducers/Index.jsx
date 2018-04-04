import { combineReducers } from 'redux';
import todos from './Todos';
import games from './Games';
import houses from './Houses';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    games,
    houses,
    routerReducer
});

export default rootReducer;
