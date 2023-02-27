
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from '../context';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';


function Content() {
  const context = React.useContext(AppContext);

  return (
    <Routes>
      {context.publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={process.env['PUBLIC_URL'] + route.path.replace('^\/', '')}
            element={(
              <PublicRoute
                module={route.module}
                wrapper={route.wrapper}
              />
            )}
          />
        )
      })}
      {context.privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={process.env['PUBLIC_URL'] + route.path.replace('^\/', '')}
            element={(
              <PrivateRoute
                module={route.module}
                wrapper={route.wrapper}
              />
            )}
          />
        )
      })}
      <Route
        key={'other-routes'}
        path={'*'}
        element={(
          <div>Route not found</div>
        )}
      />
    </Routes>
  );
}

export default Content;
