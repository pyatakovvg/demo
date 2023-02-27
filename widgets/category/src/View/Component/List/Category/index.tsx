
import type { ICategory } from '@typing/ICategory';

import { Header, Text } from '@library/kit';

import React from 'react';
import styled from 'styled-components';


const _Wrapper = styled.div`
  display: block;
  background: ${props => props.theme.color.white};
  padding: 8px;
  border-radius: 8px;
`;

const _Header = styled.div`
  display: block;
`;

const _Content = styled.div`
  display: block;
  margin: 8px 0 0;
`;


function Category(props: ICategory) {
  return (
    <_Wrapper>
      <_Header>
        <Header level={2}>{ props.title }</Header>
      </_Header>
      <_Content>
        <Text>{ props.content }</Text>
      </_Content>
    </_Wrapper>
  );
}

export default Category;
