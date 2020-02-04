import React from 'react';
import '../../styles/App.css';

import withStyles from 'react-jss';
import { styles } from './styles';

import LinkList from '../linklist/LinkList'

const App = () => {
  return (
    <LinkList />
  );
}

export const AppWithStyles = withStyles(styles)(App);
