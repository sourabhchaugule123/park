import React from 'react';

function RenterSignIn() {
  return (
    <div>
      <h2>Renter Sign In</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <div>
          <label>Vehicle Type:</label>
          <select>
            <option value="two-wheeler">Two Wheeler</option>
            <option value="four-wheeler">Four Wheeler</option>
          </select>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RenterSignIn;