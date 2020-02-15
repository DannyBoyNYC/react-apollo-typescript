import * as React from 'react';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../../constants';

import { ButtonPrimary } from '../button';
import { LinkBasic } from '../link';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1rem 0',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
});

const login = () => {
  window.location.href = '/login';
};

const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
  window.location.href = `/`;
};

const Header = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Hacker News</div>
      <LinkBasic href="/">View the Links</LinkBasic>
      <LinkBasic href="/create">Submit a Link</LinkBasic>

      {authToken ? (
        <ButtonPrimary onClick={logout}>logout</ButtonPrimary>
      ) : (
        <ButtonPrimary onClick={login}>Login</ButtonPrimary>
      )}
    </header>
  );
};

export default withRouter(Header);
