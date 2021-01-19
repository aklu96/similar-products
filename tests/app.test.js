/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App';

describe('App', () => {
  // it('calls componentDidMount', () => {
  //   jest.spyOn(App.prototype, 'componentDidMount');
  //   const wrapper = mount(<App />);
  //   expect(wrapper.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  // });

  it('should render the correct string', () => {
    const string = 'React App is setup';
    jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = render(<App />);
    expect(wrapper.html()).toContain(string);
  });
});
