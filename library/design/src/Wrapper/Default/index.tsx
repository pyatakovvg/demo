
import React from 'react';
import styled from 'styled-components';

import TabBar from '../../TabBar';


interface IProps {
  children: React.ReactElement;
}


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props => {
    return props.theme.background_color_level_1
  }};
  overflow: auto;
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  overflow: auto;
`;

const _Controls = styled.div`
  display: block;
`;



function DefaultWrapper(props: IProps) {
  return (
    <_Wrapper>
      <_Content>
        { React.Children.only(props.children) }
      </_Content>
      <_Controls>
        <TabBar />
      </_Controls>
    </_Wrapper>
  );
}

export default React.memo(DefaultWrapper);
