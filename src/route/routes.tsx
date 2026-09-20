import Layout from '@/components/layout/Layout';
import * as Pg from '@/pages';

export interface RouteProps {
  name: string;
  path: string;
  element?: any;
  children?: RouteProps[];
}

const routes: RouteProps[] = [
  {
    name: '',
    path: '/login',
    element: Pg.LoginPage,
  },
  {
    name: '',
    path: '/',
    element: Layout,
    children: [
      {
        name: '',
        path: '/home',
        element: Pg.HomePage,
      },
      {
        name: '',
        path: '/home2',
        element: Pg.HomePage,
      },
    ],
  },
];

export default routes;
