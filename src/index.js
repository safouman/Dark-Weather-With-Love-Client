import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app';
import rootReducer from './reducers';
import theme from './theme';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.querySelector('.container')
);
