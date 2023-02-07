import React from 'react';
import thankYouImg from '../../assets/svg/illustration-thank-you.svg';
// Importing type
import { ThankYouProps } from './types';

function ThankYou(props: ThankYouProps) {
  return (
    <div className="thank-you-container">
      <img src={thankYouImg} alt="Thank You" />
      <div className="selected">
        <span>You selected {props.rating} out of 5</span>
      </div>
      <article>
        <h3>Thank You!</h3>
        <p>
          We appreciate you taking the time to give a rating. If
          you ever need more support, don't hesitate to get in touch!
        </p>
      </article>
    </div>
  );
}

export default ThankYou;
