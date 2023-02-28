
import React from 'react';


const routes: any[] = [
  {
    path: '/',
    module: React.lazy(() => import(/* webpackChunkName: "module.main" */'@module/main')),
  },
  {
    path: '/valuation',
    module: React.lazy(() => import(/* webpackChunkName: "module.valuation" */'@module/valuation')),
  },
  {
    path: '/cart',
    module: React.lazy(() => import(/* webpackChunkName: "module.cart" */'@module/cart')),
  },
  {
    path: '/sign-in',
    module: React.lazy(() => import(/* webpackChunkName: "module.sign-in" */'@module/sign-in')),
  },
];

export default routes;
