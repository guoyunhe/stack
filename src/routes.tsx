import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/app';
import NotFound from './pages/error/not-found';
import Home from './pages/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
