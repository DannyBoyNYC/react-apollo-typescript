import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// import { ThemeProvider } from 'react-jss';
// import theme from '../../theme.config';
// import '../../styles/App.css';

import withStyles from 'react-jss';
// import { styles } from './styles';
import classNames from 'classnames';

import CreateLink from '../createlink/CreateLink'
import LinkList from '../linklist/LinkList'
import Header from '../header/Header'
import Login from '../login/Login'

export interface PropsType extends WithStyles<typeof styles> {
  /** Type of DanielTestComponent to render */
  variation: 'daniel-test';
  /** Additional class styles to add */
  className?: string;
}

const App: React.FC<PropsType> = () => {
    return (
      <Router>
      <div className="center w85">
          <Header
            // classNames='header'
          />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        </div>
        </Router>
    );
}

export default App;
