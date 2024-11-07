import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import HeroesDetails from '../pages/heroesDetails';
import ErrorPage from '../pages/errorPage';
import Home from '../pages/homePage';

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
