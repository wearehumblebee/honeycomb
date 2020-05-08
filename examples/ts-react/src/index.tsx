import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import App from './App';
import DefaultTheme from './themes';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
