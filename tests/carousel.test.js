/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Carousel from '../client/src/components/Carousel';

const exampleProducts = [{
  impacts: ['organic cotton', 'hemp'],
  name: "M's Incredible Metal Awesome Cotton Soap",
  num_colors: 4,
  price: '$143.99',
  relatedProductIds: [78, 12, 41, 5, 71, 54, 8, 63, 91, 85, 19, 28, 37],
  variations: [{
    _id: '60025b53c95577312b592782',
    color: 'Aquamarine',
    original: 'https://fjords.s3-us-west-1.amazonaws.com/20895_PTPL.webp',
    onHover: 'https://fjords.s3-us-west-1.amazonaws.com/20895_PTPL.webp',
  }, {
    _id: '60025b53c95577312b592783',
    color: 'GoldenRod',
    original: 'https://fjords.s3-us-west-1.amazonaws.com/27871_FGE.webp',
    onHover: 'https://fjords.s3-us-west-1.amazonaws.com/27871_FGE_KT1.webp',
  }],
  length: 4,
  _id: 13,
}];

describe('Carousel', () => {
  it('should render without crashing', () => {
    shallow(<Carousel products={[]} />);
  });

  it('should accept an array of products as props', () => {
    const wrapper = mount(<Carousel products={exampleProducts} />);
    expect(wrapper.props().products).toEqual(exampleProducts);
  });
});
