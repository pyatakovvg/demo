
import { Layout } from '@library/design';

import React from 'react';

import Store from './Store';


function View() {
  return (
    <Layout title={'Главная страница'}>
      <Store />
    </Layout>
  );
}

export default View;
