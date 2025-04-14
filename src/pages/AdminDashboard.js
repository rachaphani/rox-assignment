import React from 'react';
import Header from '../components/Header';

const AdminDashboard = () => {
  return (
    <div className="container">
      <Header title="Admin Dashboard" />
      <div className="card">
        <h3>Statistics</h3>
        <p>Total Users: 100</p>
        <p>Total Stores: 50</p>
        <p>Total Ratings: 200</p>
      </div>

      <div className="card">
        <h3>Add New User</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="Address" required />
          <select required>
            <option value="user">Normal User</option>
            <option value="admin">Admin</option>
            <option value="owner">Store Owner</option>
          </select>
          <button>Add User</button>
        </form>
      </div>

      <div className="card">
        <h3>Store List</h3>
        <input type="text" placeholder="Search by name or address" />
        <ul>
          <li>Store A - Rating: 4.5</li>
          <li>Store B - Rating: 3.8</li>
        </ul>
      </div>

      <div className="card">
        <h3>User List</h3>
        <input type="text" placeholder="Filter by name, email or role" />
        <ul>
          <li>phani - phani@email.com - Admin</li>
          <li>Ram - ram@email.com - User</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
