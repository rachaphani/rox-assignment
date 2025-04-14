import React from 'react';

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? '#ffc107' : '#e4e5e9' }}>
        &#9733;
      </span>
    );
  }
  return <div>{stars}</div>;
};

export default RatingStars;
