import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';

export const CustomRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
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
