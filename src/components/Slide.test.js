import React from 'react';
import { shallow } from 'enzyme';
import Slide from './Slide';

const MOCKED_SLIDE_DATA = {
  id: '1',
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'Description',
  aroma: 'Aroma',
  taste: 'Taste',
  weight: 'Weight',
  mouthfeel: 'Mouthfeel',
  price: 'price',
  image: 'image-url'
};
const MOCKED_NEXT_SLIDE = '2';

const wrapper = shallow(
  <Slide slideData={MOCKED_SLIDE_DATA} nextSlide={MOCKED_NEXT_SLIDE} />
);

describe('<Slide/> Component', () => {
  it('should render <div className="wrapper" />', () => {
    expect(wrapper.find('.wrapper').length).toBe(1);
  });

  it('should render <div className="wrapper" />', () => {
    expect(wrapper.find('.wrapper').length).toBe(1);
  });

  it('should render two <div className=".half-column" />', () => {
    expect(wrapper.find('.half-column').length).toBe(2);
  });

  it('should render three <TransitionWrapper />', () => {
    expect(wrapper.find('TransitionWrapper').length).toBe(3);
  });

  it('should renders <div className="details" />', () => {
    expect(wrapper.find('.details').length).toBe(1);
  });

  it('should render three <TransitionWrapper />', () => {
    expect(wrapper.find('BlockInfo').length).toBe(7);
  });

  it('should render a <Footer /> component', () => {
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
