import React from 'react';
import './WelcomeBtn.scss';
import { animateCurtains } from 'services/animateCurtains';

export const WelcomeBtn = ({ setHomePage }) => {
  return (
    <button
      className="WelcomebButton"
      onClick={() => {
        animateCurtains();
        setTimeout(() => setHomePage(false), 3000);
      }}
    >
      Click Me!
    </button>
  );
};
