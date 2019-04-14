import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const MOCKED_ID = '1';
const MOCKED_PRICE = '$32';
const MOCKED_NEXT_SLIDE = '2';

const wrapper = shallow(
  <Footer id={MOCKED_ID} price={MOCKED_PRICE} nextSlide={MOCKED_NEXT_SLIDE} />
);

describe('<Footer /> Component', () => {
  it('should render footer tag', () => {
    expect(wrapper.find('footer').length).toBe(1);
  });

  it('should render a <div /> with "price" class', () => {
    expect(wrapper.find('.price').length).toBe(1);
  });

  it('should render a <TransitionWrapper /> component', () => {
    expect(wrapper.find('TransitionWrapper').length).toBe(1);
  });

  it('should render an <Actions /> component', () => {
    expect(wrapper.find('Actions').length).toBe(1);
  });
});
