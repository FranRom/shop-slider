import React from 'react';
import PropTypes from 'prop-types';

import Slide from './Slide';

const Slider = ({ slides }) => (
  <div>
    {slides.map(slideData => (
      <Slide slideData={slideData} key={slideData.id} />
    ))}
  </div>
);

Slider.propTypes = {
  slides: PropTypes.shape().isRequired
};

export default Slider;
