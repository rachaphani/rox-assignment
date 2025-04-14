import React from 'react';
import RatingStars from './RatingStars';

const StoreCard = ({ name, address, overallRating, userRating }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>Address: {address}</p>
      <p>Overall Rating: {overallRating}</p>
      <p>Your Rating:</p>
      <RatingStars rating={userRating} />
      <input type="number" min="1" max="5" placeholder="Rate 1-5" />
      <button>Submit Rating</button>
    </div>
  );
};

export default StoreCard;