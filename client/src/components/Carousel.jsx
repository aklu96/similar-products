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
  const {
    products,
    index,
    wishList,
    addToWishList,
  } = props;
  return (
    <div>
      <ViewPort>
        <ProductContainer index={index}>
          {products.map((product) => {
            // check if product is included in the wishlist and pass
            // this information down for the wishlist button component
            let inWishList = false;

            // since wishlist is coming from a separate database,
            // these products are not stricly equal. Therefore,
            // we must run a loop to compare id's
            wishList.forEach((item) => {
              if (item._id === product._id) {
                inWishList = true;
                // eslint-disable-next-line no-useless-return
                return;
              }
            });

            return (
              <Product
                key={product._id}
                product={product}
                inWishList={inWishList}
                addToWishList={addToWishList}
              />
            );
          })}
        </ProductContainer>
      </ViewPort>
    </div>
  );
};

Carousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  wishList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToWishList: PropTypes.func.isRequired,
};

export default Carousel;
