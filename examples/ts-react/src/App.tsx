import React, { FunctionComponent } from 'react';

import Nav from './components/Nav';
import AppRouter from './router';

const App: FunctionComponent = () => (
  <React.Fragment>
    <Nav />
    <AppRouter />
  </React.Fragment>
);

export default App;
