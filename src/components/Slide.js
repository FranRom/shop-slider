import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TransitionWrapper from './TransitionWrapper';
import BlockInfo from './BlockInfo';
import Footer from './Footer';

import './Slide.scss';

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
    'color-square-container': true,
    'purple-water': id === '1',
    'marengo-lap': id === '2',
    'purple-cey': id === '3'
  });

  const colorSquareTwoClass = classNames({
    'color-square-container': true,
    'green-water': id === '1',
    'purple-lap': id === '2',
    'orange-cey': id === '3'
  });

  return (
    <div className="wrapper">
      <div className={bigBackgroundClass}>
        <TransitionWrapper id={id} className="transition-image">
          <div className="image">
            <img src={image} alt={title} />
          </div>
        </TransitionWrapper>

        <div className="color-column-group">
          <TransitionWrapper id={id} className="transition-square-one">
            <div className={colorSquareOneClass} />
          </TransitionWrapper>
          <TransitionWrapper id={id} className="transition-square-two">
            <div className={colorSquareTwoClass} />
          </TransitionWrapper>
        </div>
      </div>

      <div className="half-column pink">
        <BlockInfo id={id} description={subtitle} className="block subtitle" />
        <BlockInfo id={id} title={title} className="block title" />

        <div className="details">
          <BlockInfo
            id={id}
            description={description}
            className="block description"
          />
          <BlockInfo
            id={id}
            subtitle="Taste"
            description={taste}
            className="block info"
          />
          <BlockInfo
            id={id}
            subtitle="Aroma"
            description={aroma}
            className="block info"
          />
          <BlockInfo
            id={id}
            subtitle="MouthFeel"
            description={mouthfeel}
            className="block info"
          />
        </div>

        <BlockInfo id={id} description={weight} className="block weight" />

        <Footer id={id} price={price} nextSlide={nextSlide} />
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
