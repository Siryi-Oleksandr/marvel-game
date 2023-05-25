import React from 'react';
import { Link } from 'react-router-dom';
import { GoBtn } from '../Buttons/Buttons.styled';

function ButtonGoToPlayPage(props) {
  return (
    <GoBtn>
      <Link to="/play">Let's play</Link>
    </GoBtn>
  );
};

export default ButtonGoToPlayPage;
