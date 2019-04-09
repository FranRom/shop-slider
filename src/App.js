import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Slide from './components/Slide';

import ENDPOINT_RESPONSE from './endpoint';

class App extends Component {
  state = {
    slides: [],
    slidesIds: []
  };

  componentDidMount() {
    // We would set here the real API CALL, Example:
    // fetch('https://api.mydomain.com')
    // .then(response => response.json())
    // .then(data => this.setState({ slides: data }));

    this.setState({
      slides: ENDPOINT_RESPONSE.ENDPOINT_RESPONSE,
      slidesIds: this.getAllSlidesIds(ENDPOINT_RESPONSE.ENDPOINT_RESPONSE)
    });
  }

  getAllSlidesIds = slides => slides.map(slide => slide.id);

  getNextSlide = (currentSlideId, slidesIds = []) => {
    const index = slidesIds.indexOf(currentSlideId);
    const isTheLastSlide = currentSlideId === slidesIds[slidesIds.length - 1];

    if (isTheLastSlide) {
      return slidesIds[0];
    }
    return slidesIds[index + 1];
  };

  render() {
    const { slides, slidesIds } = this.state;

    return (
      <Router>
        {slides.length ? (
          <Fragment>
            <Route
              exact={true}
              path="/"
              render={() => <Redirect to={`/product/${slides[0].id}`} />}
            />
            <Route
              path="/product/:slideId"
              render={({ match }, props) => (
                <Slide
                  slideData={slides.find(
                    slide => slide.id === match.params.slideId
                  )}
                  nextSlide={this.getNextSlide(match.params.slideId, slidesIds)}
                  {...props}
                />
              )}
            />
          </Fragment>
        ) : (
          <h2>Loading...</h2>
        )}
      </Router>
    );
  }
}

export default App;
