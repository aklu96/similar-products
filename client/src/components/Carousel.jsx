/* eslint-disable no-underscore-dangle */
// will manage state for the arrows

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './product-components/Product';

// const ViewPort = styled.div`
//   position: absolute;
//   width:
// `;

const ProductContainer = styled.div`
  display: flex;
  width: 1400px;
  margin-left: 12px;
`;

const Carousel = (props) => {
  const { products } = props;
  return (
    <div>
      <ProductContainer>
        {products.map((product) => <Product key={product._id} product={product} />)}
      </ProductContainer>
    </div>
  );
};

Carousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
