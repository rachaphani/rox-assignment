import React from 'react';

const SignupPage = () => {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <label>Name</label>
        <input type="text" minLength={20} maxLength={60} required />
        <label>Email</label>
        <input type="email" required />
        <label>Address</label>
        <textarea maxLength={400} required></textarea>
        <label>Password</label>
        <input
          type="password"
          pattern="(?=.*[A-Z])(?=.*[^\w\s]).{8,16}"
          title="8-16 characters, 1 uppercase, 1 special character"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignupPage;
