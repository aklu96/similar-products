/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Color from '../../client/src/components/product-components/Color';

const exampleVariation = {
  _id: '60025b53c95577312b592782',
  color: 'Aquamarine',
  original: 'https://fjords.s3-us-west-1.amazonaws.com/20895_PTPL.webp',
  onHover: 'https://fjords.s3-us-west-1.amazonaws.com/20895_PTPL.webp',
};

describe('Color', () => {
  it('should render without crashing', () => {
    shallow(<Color variation={exampleVariation} />);
  });

  it('should accept a variation object as props', () => {
    const wrapper = mount(<Color variation={exampleVariation} />);
    expect(wrapper.props().variation).toEqual(exampleVariation);
  });
});
