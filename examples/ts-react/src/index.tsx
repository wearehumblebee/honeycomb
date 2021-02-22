import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import App from './App';
import DefaultTheme from './themes';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.querySelector('#root'),
);
