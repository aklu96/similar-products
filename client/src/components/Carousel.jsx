/* eslint-disable no-underscore-dangle */
// will manage state for the arrows

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './product-components/Product';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  width: 1400px;
  margin: auto;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state for arrows
    };
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <CarouselContainer>
          <LeftArrow />
          <ProductContainer>
            {products.map((product) => <Product key={product._id} product={product} />)}
          </ProductContainer>
          <RightArrow />
        </CarouselContainer>
      </div>
    );
  }
}

Carousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
