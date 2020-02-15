import React, { Component } from 'react';
import { AUTH_TOKEN } from '../../constants';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { ButtonPrimary } from '../button';
// import { LinkBasic } from '../link';
import { InputText } from '../input';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// interface Data {
//   login: {
//     email: string,
//     password: string
//   }
// }

// interface State {
//   login: boolean,
//   email: string,
//   password: string,
//   name: string,
// }

// type Response = {
//   data: Object
// }

// type Props = {
//   onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
// };

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  };

  render() {
    const { login, email, password, name } = this.state;
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <InputText
              inputType="text"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              placeholder="Your name"
            />
          )}
          <InputText
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="email"
            placeholder="Your email address"
          />
          <InputText
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => <ButtonPrimary onClick={mutation}>{login ? 'Login' : 'Create Account'}</ButtonPrimary>}
          </Mutation>

          <ButtonPrimary onClick={() => this.setState({ login: !login })}>
            {login ? 'Need to create an account?' : 'Already have an account?'}
          </ButtonPrimary>
        </div>
      </div>
    );
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup;
    this._saveUserData(token);
    this.props.history.push(`/`);
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
