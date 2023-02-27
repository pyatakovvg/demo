import { Layout } from '@library/design';
import { Button, Scrollable } from '@library/kit';

import React from 'react';
import styled from 'styled-components';

import Content from './Content';


const _Controls = styled.div`
  display: block;
  padding: 16px 32px;
`;


function View() {
  const [isDisabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    if (isDisabled) {
      setTimeout(() => setDisabled(false), 2000);
    }
  }, [isDisabled]);

  function handleScrollToTop() {
    setDisabled(true);
  }

  return (
    <Layout
      type={'secondary'}
      title={'Назад'}
      backTo={'/'}
    >
      <Scrollable>
        <Content />
      </Scrollable>
      <_Controls>
        <Button disabled={isDisabled} onClick={() => handleScrollToTop()}>scroll top {isDisabled ? 'true' : 'false'}</Button>
      </_Controls>
    </Layout>
  );
}

export default View;
