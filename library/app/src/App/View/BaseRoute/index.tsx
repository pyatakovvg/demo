
import IRoute from '@typing/IRoute';

import React from 'react';

import context from '../../context';


function Module(props: Omit<IRoute, 'path'>) {
  if (props.module) {
    return <props.module />
  }
  return null;
}


function PublicRoute(props: Omit<IRoute, 'path'>) {
  const { wrappers, splash } = React.useContext(context);
  const Wrapper: any = wrappers ? wrappers[props?.wrapper ?? 'default'] : null;

  if (Wrapper) {
    return (
      <Wrapper>
        <React.Suspense fallback={splash}>
          <Module {...props} />
        </React.Suspense>
      </Wrapper>
    );
  }
  return (
    <React.Suspense fallback={splash}>
      <Module {...props} />
    </React.Suspense>
  );
}

export default PublicRoute;
