import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { GlobalStyle } from './assets/style/globalStyles';
import reportWebVitals from './reportWebVitals';
import Root from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './provider/AuthProvider';


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </ApolloProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
