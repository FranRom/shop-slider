import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';

import './Slide.scss';

const TransitionWrapper = ({ children, id }) => (
  <TransitionGroup>
    <CSSTransition key={id} timeout={1000} classNames="item">
      {children}
    </CSSTransition>
  </TransitionGroup>
);

const Slide = ({ slideData, nextSlide }) => {
  const {
    id,
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

  const bigBackgroundClass = classNames({
    'half-column': true,
    'orange-water': id === '1',
    'salmon-lap': id === '2',
    'green-cey': id === '3'
  });

  const colorSquareOneClass = classNames({
    'color-column': true,
    'purple-water': id === '1',
    'marengo-lap': id === '2',
    'purple-cey': id === '3'
  });

  const colorSquareTwoClass = classNames({
    'color-column': true,
    'green-water': id === '1',
    'purple-lap': id === '2',
    'orange-cey': id === '3'
  });

  return (
    <div className="wrapper">
      <div className={bigBackgroundClass}>
        <TransitionGroup>
          <CSSTransition key={id} timeout={1000} classNames="image">
            <div className="image">
              <img src={image} alt={title} />
            </div>
          </CSSTransition>
        </TransitionGroup>
        <div className="color-column-group">
          <div className={colorSquareOneClass} />
          <div className={colorSquareTwoClass} />
        </div>
      </div>
      <div className="half-column pink">
        <div className="block subtitle">
          <TransitionWrapper id={id}>
            <p>{subtitle}</p>
          </TransitionWrapper>
        </div>

        <div className="block title">
          <TransitionWrapper id={id}>
            <h1>{title}</h1>
          </TransitionWrapper>
        </div>
        <div className="details">
          <div className="block description">
            <TransitionWrapper id={id}>
              <p>{description}</p>
            </TransitionWrapper>
          </div>
          <div className="block info">
            <TransitionWrapper id={id}>
              <div>
                <h4>Taste</h4>
                <p>{taste}</p>
              </div>
            </TransitionWrapper>
          </div>
          <div className="block info">
            <TransitionWrapper id={id}>
              <div>
                <h4>Aroma</h4>
                <p>{aroma}</p>
              </div>
            </TransitionWrapper>
          </div>
          <div className="block info">
            <TransitionWrapper id={id}>
              <div>
                <h4>Mouthfeel</h4>
                <p>{mouthfeel}</p>
              </div>
            </TransitionWrapper>
          </div>
        </div>
        <span className="block weight">
          <TransitionWrapper id={id}>
            <p>{weight}</p>
          </TransitionWrapper>
        </span>
        <footer className="footer">
          <div className="price">
            <TransitionWrapper id={id}>
              <p>{price}</p>
            </TransitionWrapper>
          </div>
          <div>
            <input type="number" defaultValue="1" />
            <button className="btn">ADD TO CART</button>
            <Link to={`/product/${nextSlide}`}>
              <button className="btn">NEXT PRODUCT</button>
            </Link>
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
  nextSlide: PropTypes.string.isRequired
};

export default Slide;
