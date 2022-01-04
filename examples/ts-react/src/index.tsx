import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import AppRouter from './router';
import DefaultTheme from './themes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root'),
);
