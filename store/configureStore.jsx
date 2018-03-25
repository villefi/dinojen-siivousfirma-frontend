import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import {routerMiddleware } from 'react-router-redux';

const logger = createLogger();
export default function configureStore(initialState, history) {
  const historyMiddleware = routerMiddleware(history);
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promise, logger, historyMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
