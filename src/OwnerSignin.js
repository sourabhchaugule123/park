import React from 'react';

function OwnerSignIn() {
  return (
    <div>
      <h2>Owner Sign In</h2>
      <form>
        <div>
          <label>Email (Owner):</label>
          <input type="email" />
        </div>
        <div>
          <label>Password (Owner):</label>
          <input type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OwnerSignIn;
