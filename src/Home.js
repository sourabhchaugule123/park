import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/signIn">
        <button>Sign In</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
}

export default Home;
