import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Actions = ({ nextSlide }) => {
  return (
    <div>
      <input type="number" defaultValue="1" />
      <button className="btn">ADD TO CART</button>
      <Link to={`/product/${nextSlide}`}>
        <button className="btn">NEXT PRODUCT</button>
      </Link>
    </div>
  );
};

Actions.propTypes = {
  nextSlide: PropTypes.string.isRequired
};

export default Actions;
