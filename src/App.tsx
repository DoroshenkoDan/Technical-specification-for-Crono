import { lazy } from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';

import MainLayout from './layouts/MainLayout';

import AppLayout from 'layouts/AppLayout';

const HomePage = lazy(() => import('./pages/HomePage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
