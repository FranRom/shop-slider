import React from 'react';
import { shallow } from 'enzyme';
import BlockInfo from './BlockInfo';

const MOCKED_ID = '1';
const MOCKED_TITLE = 'Title Example';
const MOCKED_DESCRIPTION = 'Description example are really cool';
const MOCKED_SUBTITLE = 'Subtitle Example';
const MOCKED_CLASSNAME = 'classNameExample';

const wrapper = shallow(
  <BlockInfo
    id={MOCKED_ID}
    title={MOCKED_TITLE}
    subtitle={MOCKED_SUBTITLE}
    description={MOCKED_DESCRIPTION}
    className={MOCKED_CLASSNAME}
  />
);

describe('<BlockInfo /> Component', () => {
  it('should render a <TransitionWrapper /> Component with .transition-item class and not crash if it has not received texts', () => {
    const noTextsWrapper = shallow(<BlockInfo id={MOCKED_ID} />);
    expect(noTextsWrapper.find('TransitionWrapper').length).toBe(1);
    expect(noTextsWrapper.find('.transition-item').length).toBe(1);
  });

  it('should render a <H1/> if its receive Title as a prop', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should render a <h1/> if its receive Title as a prop', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should render a <h4/> if its receive subtitle as a prop', () => {
    expect(wrapper.find('h4').length).toBe(1);
  });

  it('should render a <p/> if its receive description as a prop', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should has a class if its receive it as a prop', () => {
    expect(wrapper.find('.classNameExample').length).toBe(1);
  });
});
