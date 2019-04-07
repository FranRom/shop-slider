import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slide from './Slide';

class Slider extends Component {
  static propTypes = {
    slides: PropTypes.array
  };

  static defaultProps = {
    slides: []
  };

  state = {
    currentIndex: 0
  };

  handleGoToNextSlide = () => {
    const slidesTotal = this.props.slides.length;
    const hasMoreSlides = (currentIndex, slidesTotal) =>
      currentIndex < slidesTotal - 1;

    this.setState(prevState => ({
      currentIndex: hasMoreSlides(prevState.currentIndex, slidesTotal)
        ? prevState.currentIndex + 1
        : 0
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const { slides } = this.props;

    return (
      <div>
        {slides.length ? (
          <Slide
            slideData={slides[currentIndex]}
            handleGoToNextSlide={this.handleGoToNextSlide}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Slider;
