
import React from 'react';
import styled from 'styled-components';

import Component from './Component';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: 150px;
`;


function View() {
  return (
    <_Wrapper>
      <Component />
    </_Wrapper>
  );
}

export default View;
