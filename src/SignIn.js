import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <Link to="/signIn/renterSignIn">
        <button>Renter Sign In</button>
      </Link>
      <Link to="/signIn/ownerSignin">
        <button>Owner Sign In</button>
      </Link>
    </div>
  );
}

export default SignIn;


