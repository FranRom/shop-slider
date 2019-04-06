import React, { Component } from 'react';

import Slider from './components/Slider';

import ENDPOINT_RESPONSE from './endpoint';

class App extends Component {
  render() {
    return <Slider productsData={ENDPOINT_RESPONSE} />;
  }
}

export default App;
