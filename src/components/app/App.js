import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import CreateLink from '../createlink/CreateLink';
import LinkList from '../link-list/LinkList';
import Header from '../header/Header';
import Login from '../login/Login';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  main: {
    maxWidth: '840px',
    margin: '0 auto',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.main}>
        <Header />
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
