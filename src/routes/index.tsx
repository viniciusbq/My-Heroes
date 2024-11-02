import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import HeroesDetails from '../pages/heroesDetails';

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
  ]);

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
};
