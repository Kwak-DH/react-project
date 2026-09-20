import { Route, Routes } from 'react-router-dom';
import routes from './routes';

const AppRoutes = () => {
  console.log({ routes });

  return (
    <Routes>
      {routes.map((route) => {
        console.log({ route });
        return (
          <Route path={route.path} element={<route.element />} key={route.name}>
            {route.children?.map((r) => {
              console.log({ r });
              return <Route path={r.path} element={<r.element />} />;
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
