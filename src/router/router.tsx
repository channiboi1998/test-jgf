import { RoutePath } from '@shared/constants/route-path';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: RoutePath.Home,
    lazy: async () =>
      await import('@src/app').then((m) => ({
        Component: m.default
      })),
    children: [
      {
        index: true,
        lazy: async () =>
          await import('@pages/home').then((m) => ({
            Component: m.default
          }))
      },
      {
        path: RoutePath.ACE,
        lazy: async () =>
          await import('@pages/ace').then((m) => ({
            Component: m.default
          }))
      },
      {
        path: RoutePath.AE,
        lazy: async () =>
          await import('@pages/ae').then((m) => ({
            Component: m.default
          }))
      },
      {
        path: RoutePath.FEP,
        lazy: async () =>
          await import('@pages/fep').then((m) => ({
            Component: m.default
          }))
      },
      {
        path: RoutePath.FoodAid,
        lazy: async () =>
          await import('@pages/foodaid').then((m) => ({
            Component: m.default
          }))
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={RoutePath.Home} replace />
  }
];

export const router = createBrowserRouter(routes);
