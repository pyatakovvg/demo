
import { ThemeContext } from '@library/kit';

import React from 'react';
import styled from 'styled-components';

import context from '../../context';


const _Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;


function Splash() {
  const { splash } = React.useContext(context);
  const theme = React.useContext(ThemeContext);

  if ( ! splash) {
    return null;
  }

  return (
    <_Wrapper theme={theme}>
      { React.Children.only(splash) }
    </_Wrapper>
  );
}

export default Splash;
