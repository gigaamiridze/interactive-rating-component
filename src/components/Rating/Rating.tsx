import React, { useState } from 'react';
import starIcon from '../../assets/svg/icon-star.svg';
import classNames from 'classnames';
// Importing types
import { RatingProps, ActiveRatingsTypes } from './types';

function Rating(props: RatingProps) {
  const [activeRatings, setActiveRatings] = useState<ActiveRatingsTypes>({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });

  const { rating, setRating, setShowThankYouPage } = props;
  const { oneStar, twoStars, threeStars, fourStars, fiveStars } = activeRatings;

  const handleSubmit = () => {
    if (!rating) return;
    setShowThankYouPage(true);
  }

  return (
    <div className="rating-container">
      <div className="icon-box">
        <img src={starIcon} alt="Star" />
      </div>
      <article>
        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering!
        </p>
      </article>
      <div className="rating">
        <div
          className={classNames({ active: oneStar })}
          onClick={() => {
            setActiveRatings({
              oneStar: true,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: false,
            });
            setRating(1);
          }}
        >
          1
        </div>
        <div
          className={classNames({ active: twoStars })}
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStars: true,
              threeStars: false,
              fourStars: false,
              fiveStars: false,
            });
            setRating(2);
          }}
        >
          2
        </div>
        <div
          className={classNames({ active: threeStars })}
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStars: false,
              threeStars: true,
              fourStars: false,
              fiveStars: false,
            });
            setRating(3);
          }}
        >
          3
        </div>
        <div
          className={classNames({ active: fourStars })}
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStars: false,
              threeStars: false,
              fourStars: true,
              fiveStars: false,
            });
            setRating(4);
          }}
        >
          4
        </div>
        <div
          className={classNames({ active: fiveStars })}
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: true,
            });
            setRating(5);
          }}
        >
          5
        </div>
      </div>
      <button
        type="submit"
        className="submit-btn"
        onClick={handleSubmit}
      >
        submit
      </button>
    </div >
  );
}

export default Rating;
