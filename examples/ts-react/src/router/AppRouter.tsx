import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import HomeView from '../views/HomeView';
import FormView from '../views/FormView';
import NotFoundView from '../views/NotFoundView';

const AppRouter: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomeView />} />
      <Route path="/form" element={<FormView />} />
      <Route path="*" element={<NotFoundView />} />
    </Route>
  </Routes>
);

export default AppRouter;
