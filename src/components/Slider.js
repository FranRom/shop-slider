import React, { Component } from 'react';

import Slide from './Slide';

class Slider extends Component {
  render() {
    return (
      <div>
        {this.props.productsData.ENDPOINT_RESPONSE.map(productData => (
          <Slide productData={productData} key={productData.id} />
        ))}
      </div>
    );
  }
}

export default Slider;
