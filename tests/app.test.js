/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders Similar Products header', () => {
    const wrapper = shallow(<App />);
    const header = 'Similar to this Product';
    expect(wrapper.contains(header)).toEqual(true);
  });
});
