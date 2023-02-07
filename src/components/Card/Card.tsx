import React, { useState } from 'react';
// Importing components
import Rating from '../Rating/Rating';
import ThankYou from '../ThankYou/ThankYou';

function Card() {
  const [showThankYouPage, setShowThankYouPage] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className='card'>
      {showThankYouPage ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThankYouPage={setShowThankYouPage}
        />
      )}
    </div>
  );
}

export default Card;
