
import IRoute from '@typing/IRoute';
import { TWrapper } from '@typing/IWrapper';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import View from './View';
import context from './context';
import Online from './View/Online';
import NetworkState from './store/NetworkState';


import GlobalStyles from './styles/global';


interface IProps {
  navigate: any[];
  publicRoutes: IRoute[];
  privateRoutes: IRoute[];
  children?: React.ReactNode;
  wrappers?: TWrapper;
  splash: React.ReactElement | React.ReactNode,
}


function App(props: IProps) {
  return (
    <context.Provider value={{
      navigate: props.navigate,
      wrappers: props.wrappers,
      publicRoutes: props.publicRoutes,
      privateRoutes: props.privateRoutes,
      splash: props?.splash ?? null,
    }}>
      <GlobalStyles />
      <Online network={new NetworkState()} />
      <BrowserRouter>
        { props?.children ?? <View /> }
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
