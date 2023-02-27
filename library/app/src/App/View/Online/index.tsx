
import NetworkState from '@store/NetworkState';

import React from 'react';
import { observer } from 'mobx-react';

import { Wrapper } from "./styles";


interface IProps {
  network: NetworkState;
}


const Online = observer((props: IProps) => {
  React.useEffect(() => {
    return () => {
      props.network.destructor();
    };
  }, [props.network]);

  if (props.network.isOnline) {
    return null;
  }

  return (
    <Wrapper />
  );
});

export default Online;
