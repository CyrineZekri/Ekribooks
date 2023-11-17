// BookCard.jsx

import React from 'react';
import './Landing.css';

function BookCard({ title, image }) {
  return (
    <div className="BookCard">
      <img src={image} alt="Book Cover" className="book-image" />
      <p className="book-title">{title}</p>
    </div>
  );
}

export default BookCard;
