import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';
import "./style/fonts.css";
import { ThemeProvider } from '@emotion/react';
import theme from './mui/thems';
import { BrowserRouter } from "react-router-dom"
const client = new ApolloClient({
  // uri: process.env.REACT_APP_GRAPHCMS_URI,
  uri : "https://api-us-west-2.hygraph.com/v2/cleiet6lc30i901t5607ca9z8/master",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);


