import React from 'react';
import PropTypes from 'prop-types';

import TransitionWrapper from './TransitionWrapper';
import Actions from './Actions';

import './Footer.scss';

const Footer = ({ id, price, nextSlide }) => {
  return (
    <footer className="footer">
      <div className="price">
        <TransitionWrapper id={id} className="transition-item">
          <p>{price}</p>
        </TransitionWrapper>
      </div>
      <Actions nextSlide={nextSlide} />
    </footer>
  );
};

Footer.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  nextSlide: PropTypes.string.isRequired
};

export default Footer;
