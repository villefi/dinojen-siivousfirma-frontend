import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import App from '../containers/App';
import GameContainer from '../containers/GameContainer';
import configureStore from '../store/configureStore';

import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const history = createHistory();

const store = configureStore({}, history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/game/:id" component={GameContainer}/>
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
