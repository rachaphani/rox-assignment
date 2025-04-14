import React from 'react';

const LoginPage = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <label>Role</label>
        <select>
          <option value="admin">Admin</option>
          <option value="user">Normal User</option>
          <option value="owner">Store Owner</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
