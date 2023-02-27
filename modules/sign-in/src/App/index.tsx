
import { domain, application } from 'kernel';

import React from 'react';
import { Navigate } from 'react-router-dom';


function App() {
  const [name, setName] = React.useState<domain.User.TUserName>("");
  const [email, setEmail] = React.useState<TEmail>("");
  const [loading, setLoading] = React.useState(false);

  const { user, authenticate } = application.authenticate.useAuthenticate();

  if ( !! user) {
    return <Navigate to="/" />;
  }

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    await authenticate(name, email);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Trying to login..." : "Login"}
      </button>
    </form>
  );
}

export default App;
