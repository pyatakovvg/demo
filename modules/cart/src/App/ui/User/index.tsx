
import { services } from 'kernel';

import { Layout } from '@library/design';

import React from 'react';
import { Navigate } from 'react-router-dom';

// import { Buy } from "../Buy";
// import { Cart } from "../Cart";
// import { Orders } from "../Orders";
// import { Profile } from "../Profile";


function User() {
  const { user } = services.storageAdapter.useUserStorage();
  const { notify } = services.notificationAdapter.useNotifier();

  if ( ! user) {
    return <Navigate to={'/sign-in'} />;
  }

  function handleClick() {
    notify('gdfgdfgf');
  }

  return (
    <Layout type={'secondary'} title={'Карзина'}>
      {/*<Profile />*/}
      {/*<Orders />*/}
      {/*<Cart />*/}
      {/*<Buy />*/}
      <button onClick={handleClick}>hello</button>
    </Layout>
  );
}

export default User;
