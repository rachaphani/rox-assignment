import React from 'react';
import StoreCard from '../components/StoreCard';
import Header from '../components/Header';

const UserDashboard = () => {
  return (
    <div className="container">
      <Header title="User Dashboard" />
      <div className="card">
        <h3>Store Listings</h3>
        <input type="text" placeholder="Search by name or address" />
        <StoreCard
          name="Store A"
          address="Hyderabad "
          overallRating={4.2}
          userRating={4}
        />
        <StoreCard
          name="Store B"
          address="Bangalore"
          overallRating={3.9}
          userRating={3}
        />
      </div>
    </div>
  );
};

export default UserDashboard;