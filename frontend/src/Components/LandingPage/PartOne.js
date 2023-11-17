// components/PartOne.jsx
import React from 'react';
import './Landing.css';
import cover from '../../images/book.jpg';

function PartOne() {
  const backgroundImageStyle = {
    backgroundImage: `url(${cover})`, 
  };

  return (
    <div className="PartOne">
      <div className="background-image" style={backgroundImageStyle}></div>


    </div>


  );
}

export default PartOne;
