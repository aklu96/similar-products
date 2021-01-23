/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ColorContainer from '../../client/src/components/product-components/ColorContainer';

const exampleVariations = [{
  _id: '60025b53c95577312b592782',
  color: 'Aquamarine',
  original: 'https://fjords.s3-us-west-1.amazonaws.com/20895_PTPL.webp',
  onHover: 'https://fjords.s3-us-west-1.amazonaws.com/20895_PTPL.webp',
}, {
  _id: '60025b53c95577312b592783',
  color: 'GoldenRod',
  original: 'https://fjords.s3-us-west-1.amazonaws.com/27871_FGE.webp',
  onHover: 'https://fjords.s3-us-west-1.amazonaws.com/27871_FGE_KT1.webp',
}];

describe('ColorContainer', () => {
  it('should render without crashing', () => {
    shallow(<ColorContainer variations={exampleVariations} />);
  });

  it('should accept a variations array as props', () => {
    const wrapper = mount(<ColorContainer variations={exampleVariations} />);
    expect(wrapper.props().variations).toEqual(exampleVariations);
  });
});
