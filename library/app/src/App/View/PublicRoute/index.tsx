
import IRoute from '@typing/IRoute';

import React from 'react';

import BaseRoute from '../BaseRoute';


function PublicRoute(props: Omit<IRoute, 'path'>) {
  return <BaseRoute {...props} />;
}

export default PublicRoute;
