import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/index.css';
import { AppWithStyles } from './components/app/App';
import * as serviceWorker from './serviceWorker';

// jss
import { ThemeProvider } from 'react-jss';
import theme from './theme.config';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { setContext } from 'apollo-link-context'

// type Token = {
//   token: string
// }

const authLink = setContext((_, { headers }) => {
  const token: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazY4MzY4Z3hkNjl3MGIwOTRhaDQ4ZzZ4IiwiaWF0IjoxNTgwODMzMDM1fQ.CF5-qYJFnF7QDaPAVCqeHdAiCBjh5OJkNUZmgjiteKE`
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
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme}>
    <AppWithStyles />
    </ThemeProvider>
  </ApolloProvider>
  , document.getElementById('root'));
  
  serviceWorker.unregister();
