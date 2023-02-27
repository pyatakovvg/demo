
import IRoute from '@typing/IRoute';
import { TWrapper } from '@typing/IWrapper';

import React from 'react';


interface IConfig {
  navigate: any[];
  publicRoutes: IRoute[];
  privateRoutes: IRoute[];
  wrappers?: TWrapper;
  splash: React.ReactElement | React.ReactNode;
}


export default React.createContext<IConfig>({
  wrappers: {},
  navigate: [],
  publicRoutes: [],
  privateRoutes: [],
  splash: null,
});
