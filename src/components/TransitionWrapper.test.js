import React from 'react';
import { shallow } from 'enzyme';
import TransitionWrapper from './TransitionWrapper';

const MOCKED_ID = '1';
const MOCKED_CLASSNAME = 'classNameExample';
const MOCKED_CHILDREN = 'Children Example';

const wrapper = shallow(
  <TransitionWrapper id={MOCKED_ID} className={MOCKED_CLASSNAME}>
    <p>{MOCKED_CHILDREN}</p>
  </TransitionWrapper>
);

describe('<TransitionWrapper /> Component', () => {
  it('should render <TransitionGroup /> component', () => {
    expect(wrapper.find('TransitionGroup').length).toBe(1);
  });

  it('should render <CSSTransition /> component', () => {
    expect(wrapper.find('CSSTransition').length).toBe(1);
  });

  it('should render children if its received as a prop', () => {
    expect(wrapper.find('p').text()).toBe(MOCKED_CHILDREN);
  });
});
