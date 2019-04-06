import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ productData }) => {
  const {
    title,
    subtitle,
    description,
    aroma,
    taste,
    weight,
    mouthfeel,
    price,
    image
  } = productData;
  return (
    <div>
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{description}</p>
      <p>{aroma}</p>
      <p>{taste}</p>
      <p>{weight}</p>
      <p>{mouthfeel}</p>
      <p>{price}</p>
      <img src={image} alt={title} />
    </div>
  );
};

Slide.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    aroma: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    mouthfeel: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Slide;
