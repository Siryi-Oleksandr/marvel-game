import React from 'react';
import './WelcomeBtn.scss';

export const WelcomeBtn = ({ onClick, children }) => {
  return (
    <button className="WelcomeButton" onClick={onClick}>
      {children}
    </button>
  );
};
