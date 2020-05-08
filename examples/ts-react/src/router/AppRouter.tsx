import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeView from '../views/HomeView';
import FormView from '../views/FormView';
import NotFoundView from '../views/NotFoundView';

const AppRouter: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<HomeView />} />
    <Route path="/form" element={<FormView />} />
    <Route path="*" element={<NotFoundView />} />
  </Routes>
);

export default AppRouter;
