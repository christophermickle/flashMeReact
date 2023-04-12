import React from "react";

const Card = ({ frontDisplay, backDisplay }) => {
  return (
    <div className='card'>
      <p id='frontDisplay'>{frontDisplay}</p>
      <div className='borderBreak'></div>
      <p id='backDisplay'>{backDisplay}</p>
    </div>
  );
};

export default Card;
