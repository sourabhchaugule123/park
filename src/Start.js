import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div>
      <h1>Start Page</h1>
      <Link to="/signIn">
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default Start;
