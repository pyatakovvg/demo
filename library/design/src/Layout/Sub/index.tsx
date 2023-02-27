
import { ThemeContext } from '@library/kit';

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from './Header';

import { IProps } from '../index';


const _Wrapper = styled.div((props) => `
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props.theme.color.primary};
  overflow: auto;
`);

const _Header = styled.div`
  display: block;
  z-index: 20;
`;

const _Content = styled.div((props) => `
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props.theme.color.white};
  overflow: auto;
`);


function LayoutSub(props: Omit<IProps, 'type'>) {
  const navigate = useNavigate();
  const theme = React.useContext(ThemeContext);

  function handleBack() {
    if (props.backTo) {
      navigate(props.backTo);
    }
    else {
      navigate(-1);
    }
  }

  return (
    <_Wrapper theme={theme}>
      <_Header>
        <Header onClick={handleBack}>
          { props.title }
        </Header>
      </_Header>
      <_Content>
        { props.children }
      </_Content>
    </_Wrapper>
  );
}

export default LayoutSub;
