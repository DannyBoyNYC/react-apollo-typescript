import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// import { ThemeProvider } from 'react-jss';
// import theme from '../../theme.config';
// import '../../styles/App.css';

// import withStyles from 'react-jss';
// import { styles } from './styles';

import CreateLink from '../createlink/CreateLink'
import LinkList from '../linklist/LinkList'
import Header from '../header/Header'
import Login from '../login/Login'

class App extends React.Component {
  public render() {
    return (
      <Router>
      <div className="center w85">
        <Header />
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
}

export default App;
