
import { Header } from '@library/kit';

import React from 'react';

import styled from 'styled-components';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0;
  align-items: center;
  padding: 24px 32px;
  cursor: pointer;
`;
const Icon = styled.span((props) => `
  display: block;
  color: ${props.theme.color.white};
  
  &:after {
    display: block;
    content: '<';
    font-size: 18px;
    font-weight: 600;
  }
`);

const _Header = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  margin: 0 0 0 16px;
`;


interface IProps {
  children: React.ReactElement | string;
  onClick(): void;
}


function HeaderControl(props: IProps) {
  return (
    <_Wrapper onClick={props.onClick}>
      <Icon />
      <_Header>
        <Header>{ props.children }</Header>
      </_Header>
    </_Wrapper>
  );
}

export default HeaderControl;
