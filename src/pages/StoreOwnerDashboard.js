import React from 'react';
import Header from '../components/Header';

const StoreOwnerDashboard = () => {
  return (
    <div className="container">
      <Header title="Store Owner Dashboard" />
      <div className="card">
        <h3>Store Rating Overview</h3>
        <p>Average Rating: 4.3</p>
        <h4>Ratings from Users</h4>
        <ul>
          <li>phani rated 4</li>
          <li>Ram rated 5</li>
        </ul>
      </div>
    </div>
  );
};

export default StoreOwnerDashboard;