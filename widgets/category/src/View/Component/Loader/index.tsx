
import { ThemeContext, Text } from '@library/kit';

import React from 'react';
import styled from 'styled-components';


const _Wrapper = styled.div((props) => `
  display: flex;
  flex-direction: column;
  flex: 1 0;
  justify-content: center;
  align-items: center;
  background: ${props.theme.color.info};
  border-radius: 16px;
`);

const LoadingText = styled(Text)`
  color: white;
  font-size: 16px;
`;


function Loader() {
  const theme = React.useContext(ThemeContext);

  return (
    <_Wrapper theme={theme}>
      <LoadingText>Loading...</LoadingText>
    </_Wrapper>
  );
}

export default Loader;
