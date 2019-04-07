import React from 'react';
import PropTypes from 'prop-types';

import './Slide.scss';

const Slide = ({ slideData, handleGoToNextSlide }) => {
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
  } = slideData;
  return (
    <div className="wrapper">
      <div className="half-column orange">
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="half-column pink">
        <span className="block subtitle">{subtitle}</span>
        <h1 className="block title">{title}</h1>
        <div className="details">
          <div className="block description">{description}</div>
          <div className="block info">
            <h4>Taste</h4>
            {taste}
          </div>
          <div className="block info">
            <h4>Aroma</h4>
            {aroma}
          </div>
          <div className="block info">
            <h4>Mouthfeel</h4>
            {mouthfeel}
          </div>
        </div>
        <span className="block weight">{weight}</span>
        <footer className="footer">
          <div className="price">{price}</div>
          <div>
            <input type="number" defaultValue="1" />
            <button className="btn">ADD TO CART</button>
            <button className="btn" onClick={handleGoToNextSlide}>
              NEXT PRODUCT
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

Slide.propTypes = {
  slideData: PropTypes.shape({
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
  }),
  handleGoToNextSlide: PropTypes.func.isRequired
};

export default Slide;
