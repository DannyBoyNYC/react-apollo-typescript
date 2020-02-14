import * as React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import { AUTH_TOKEN } from '../../constants';

import { ButtonPrimary } from '../button';

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

const Header = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Hacker News</div>

      <Link to="/" className="ml1 no-underline black">
        new
      </Link>
      <Link to="/create" className="ml1 no-underline black">
        submit
      </Link>

      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              this.props.history.push(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <ButtonPrimary onClick={login}>Login</ButtonPrimary>
        )}
      </div>
    </header>
  );
};

export default withRouter(Header);
