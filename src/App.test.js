import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App /> Component', () => {
  const wrapper = shallow(<App />);
  it('should render BrowserRouter', () => {
    expect(wrapper.find('BrowserRouter').length).toBe(1);
  });

  it('should render two <Route> components to deal with query params', () => {
    expect(wrapper.find('Route').length).toBe(2);
  });
});
