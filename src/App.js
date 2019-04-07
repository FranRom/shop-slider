import React, { Component } from 'react';

import Slider from './components/Slider';

import ENDPOINT_RESPONSE from './endpoint';

class App extends Component {
  state = {
    slides: []
  };

  componentDidMount() {
    //We would set here the real API CALL
    this.setState({
      slides: ENDPOINT_RESPONSE.ENDPOINT_RESPONSE
    });
  }

  render() {
    return <Slider slides={this.state.slides} />;
  }
}

export default App;
