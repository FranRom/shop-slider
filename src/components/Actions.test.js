import React from 'react';
import { shallow } from 'enzyme';
import Actions from './Actions';

const NEXT_SLIDE_MOCKED = '2;';

describe('<Actions /> Component', () => {
  const wrapper = shallow(<Actions nextSlide={NEXT_SLIDE_MOCKED} />);
  it('should render two buttons', () => {
    expect(wrapper.find('button').length).toBe(2);
  });

  it('should render a <Link /> component', () => {
    expect(wrapper.find('Link').length).toBe(1);
  });

  it('should render an input', () => {
    expect(wrapper.find('input').length).toBe(1);
  });
});
