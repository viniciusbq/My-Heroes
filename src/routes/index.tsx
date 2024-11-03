import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import HeroesDetails from '../pages/heroesDetails';
import ErrorPage from '../pages/errorPage';

export const CustomRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/details/:id',
      element: <HeroesDetails />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
