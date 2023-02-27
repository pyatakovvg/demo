
import { domain, services } from 'kernel';

import React from 'react';


function Profile() {
  const { user } = services.storageAdapter.useUserStorage();

  console.log(user)
  if ( ! user) {
    return null;
  }

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>Allergies</p>
      <ul>
        {user.allergies.map((ingredient) => (
          <li key={ingredient}>{domain.Product.ingredients[ingredient]}</li>
        ))}
      </ul>
      <p>Preferences</p>
      <ul>
        {user.preferences.map((ingredient) => (
          <li key={ingredient}>{domain.Product.ingredients[ingredient]}</li>
        ))}
      </ul>
    </>
  );
}

export default Profile;
