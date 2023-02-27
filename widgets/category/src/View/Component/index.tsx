
import type { ICategory } from '@typing/ICategory';

import React from 'react';

import List from './List';
import Loader from './Loader';


async function fetchData(): Promise<ICategory[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return [
    {
      uuid: 'aaa_1',
      title: 'Category 1',
      content: 'If you run this code and watch the console logs, you’ll notice the sequence is'
    },
    {
      uuid: 'aaa_2',
      title: 'Category 2',
      content: 'If you run this code and watch the console logs, you’ll notice the sequence is'
    }
  ]
}


function View() {
  const [categories, setCategories] = React.useState<ICategory[]>([]);

  React.useEffect(() => {
    fetchData()
      .then((data) => {
        setCategories(data);
      });
  }, []);

  if ( ! categories.length) {
    return <Loader />;
  }

  return <List data={categories} />;
}

export default View;
