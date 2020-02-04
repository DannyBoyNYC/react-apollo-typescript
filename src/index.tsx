import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppWithStyles } from './components/app/App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from 'react-jss';
import theme from './theme.config';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppWithStyles />
  </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
