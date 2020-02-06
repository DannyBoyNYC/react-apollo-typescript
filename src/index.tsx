import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/index.css';
import App from './components/app/App';

// jss
import { ThemeProvider } from 'react-jss';
import theme from './theme.config';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { setContext } from 'apollo-link-context'

import { BrowserRouter } from 'react-router-dom'
import { AUTH_TOKEN } from "./constants";

const authLink = setContext((_, { headers }) => {
  if (!localStorage.getItem(AUTH_TOKEN)) {
    return
  }
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'));
    

