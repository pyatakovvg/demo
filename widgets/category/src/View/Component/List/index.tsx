
import type { ICategory } from '@typing/ICategory';

import React from 'react';
import styled from 'styled-components';

import Category from './Category';


interface IProps {
  data: ICategory[];
}


const _Wrapper = styled.div`
  display: block;
  padding: 8px;
  background: ${props => props.theme.color.grayLight};
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 ${props => props.theme.color.gray};
`;

const _Item = styled.div`
  display: block;
  
  & + & {
    margin: 16px 0 0;
  }
`;


function List(props: IProps) {
  return (
    <_Wrapper>
      {props.data.map((category) => (
        <_Item key={category.uuid}>
          <Category {...category} />
        </_Item>
      ))}
    </_Wrapper>
  );
}

export default List;
