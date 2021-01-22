/* eslint-disable no-underscore-dangle */
// will manage state for the arrows

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './product-components/Product';

const ViewPort = styled.div`
  position: absolute;
  width: 100vw;
  margin-left: 12px;
  box-sizing: border-box;
`;

const ProductContainer = styled.div`
  display: flex;
  width: fit-content;
  transition: transform 0.2s 0s ease-in;
  transform: translateX(-${(props) => props.index}px)
`;

const Carousel = (props) => {
  const { products, index } = props;
  return (
    <div>
      <ViewPort>
        <ProductContainer index={index}>
          {products.map((product) => <Product key={product._id} product={product} />)}
        </ProductContainer>
      </ViewPort>
    </div>
  );
};

Carousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Carousel;
